import ProductsList from "../components/ProductsList";
import fetchProducts from "../utils/fetchProducts";
import { useEffect, useState } from "react";
import LoadingIcon from "../components/Icons/LoadingIcon";
import CurrentCategory from "../components/CurrentCategory";

const Home = () => {
  const [products, setProducts] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts("https://fakestoreapi.com/products").then((products) => {
      setProducts(products);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <CurrentCategory>Home</CurrentCategory>
      <div className="container">
        {isLoading ? (
          <LoadingIcon />
        ) : (
          products && <ProductsList products={products} />
        )}
      </div>
    </>
  );
};

export default Home;
