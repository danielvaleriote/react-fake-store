import ProductsList from "../components/ProductsList";
import fetchProducts from "../utils/fetchProducts";
import { useEffect, useState, useReducer } from "react";
import LoadingIcon from "../components/Icons/LoadingIcon";
import FiltersContainer from "../components/FiltersContainer";

const ProductsPage = ({ pageName, apiUrl }) => {
  const [products, setProducts] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function reducer(state, action) {
    switch (action.type) {
      case "SORT":
        if (action.payload === "CRESCENT") {
          return {
            state,
            filteredProducts: state.filteredProducts.sort(
              (a, b) => a.price - b.price
            ),
          };
        }
        if (action.payload === "DECRESCENT") {
          return {
            state,
            filteredProducts: state.filteredProducts.sort(
              (a, b) => b.price - a.price
            ),
          };
        }
        if (action.payload === "RATING") {
          return {
            state,
            filteredProducts: state.filteredProducts.sort(
              (a, b) => b.rating.rate - a.rating.rate
            ),
          };
        }
        break;
      case "FILTER":
        const productsCopy = [...products];

        const filteredProductsArray = productsCopy.filter((product) =>
          product.title
            .toLowerCase()
            .trim()
            .includes(action.payload.search.toLowerCase().trim())
        );
        return { ...state, filteredProducts: filteredProductsArray };
      case "LOADED":
        return { ...state, filteredProducts: products };

      default:
        return { ...state };
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    filter: "",
    filteredProducts: "",
  });

  useEffect(() => {
    fetchProducts(apiUrl).then((products) => {
      setProducts(products);
      setIsLoading(false);
      dispatch({ type: "LOADED" });
    });
  }, [apiUrl]);

  function changeHandle(target) {
    dispatch({
      type: "FILTER",
      payload: { search: target.value.toString() || "" },
    });
  }

  function sortProducts(param) {
    dispatch({ type: "SORT", payload: param });
  }
  return (
    <>
      <FiltersContainer
        category={pageName.toUpperCase()}
        onClickHandle={sortProducts}
        onChangeHandle={changeHandle}
      />
      <main className="container main" style={{ position: "relative" }}>
        {isLoading ? (
          <LoadingIcon />
        ) : (
          state.filteredProducts && (
            <ProductsList products={state.filteredProducts} />
          )
        )}
      </main>
    </>
  );
};

export default ProductsPage;
