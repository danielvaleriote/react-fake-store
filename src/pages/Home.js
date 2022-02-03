import ProductsList from "../components/ProductsList";
import fetchProducts from "../utils/fetchProducts";
import { useEffect, useState } from "react";
import LoadingIcon from "../components/Icons/LoadingIcon";
import FiltersContainer from "../components/FiltersContainer";

const Home = () => {
  const [products, setProducts] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sortedProducts, setSortedProducts] = useState("");
  const [filteredProducts, setFilteredProducts] = useState("");

  useEffect(() => {
    fetchProducts("https://fakestoreapi.com/products").then((products) => {
      setProducts(products);
      setIsLoading(false);
      setSortedProducts(products);
    });
  }, []);

  function changeHandle(e) {
    let productsCopy = [...products];
    if (e.target.value) {
      let filteredProductsArray = productsCopy.filter((product) =>
        product.title
          .toLowerCase()
          .trim()
          .includes(e.target.value.toLowerCase().trim())
      );
      setFilteredProducts(filteredProductsArray);
      sortProducts();
    } else {
      setFilteredProducts(productsCopy);
      sortProducts();
    }
  }

  function sortProducts(param) {
    let productsCopy = [...filteredProducts];
    switch (param) {
      case "crescent":
        setSortedProducts(productsCopy.sort((a, b) => a.price - b.price));
        break;
      case "decrescent":
        setSortedProducts(productsCopy.sort((a, b) => b.price - a.price));
        break;
      case "rating":
        setSortedProducts(
          productsCopy.sort((a, b) => b.rating.rate - a.rating.rate)
        );
        break;
      default:
        setSortedProducts(productsCopy);
        break;
    }
  }

  return (
    <>
      <FiltersContainer
        category="Home"
        onClickHandle={sortProducts}
        onChangeHandle={changeHandle}
      />
      <div className="container">
        {isLoading ? (
          <LoadingIcon />
        ) : (
          sortedProducts && <ProductsList products={filteredProducts} />
        )}
      </div>
    </>
  );
};

export default Home;
