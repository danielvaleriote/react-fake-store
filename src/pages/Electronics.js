import ProductsList from "../components/ProductsList";
import fetchProducts from "../utils/fetchProducts";
import { useEffect, useState } from "react";
import LoadingIcon from "../components/Icons/LoadingIcon";
import CurrentCategory from "../components/CurrentCategory";

const Electronics = () => {
  const [products, setProducts] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ status: false, message: "" });

  useEffect(() => {
    fetchProducts("https://fakestoreapi.com/products/category/electronics")
      .then((products) => {
        setProducts(products);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ status: true, message: err });
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      <CurrentCategory>Electronics</CurrentCategory>
      <div className="container">
        {isLoading ? (
          <LoadingIcon />
        ) : error.status ? (
          <h2 className="text-center mt-5">
            An error has ocurred :/
            <br />
            {error.message}
          </h2>
        ) : products.length === 0 ? (
          <h2 className="text-center mt-5">Sorry, no products found :/</h2>
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
};

export default Electronics;
