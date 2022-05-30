import ProductsPage from "../components/ProductsPage";

const Home = () => {
  return (
    <>
      <ProductsPage
        pageName="Home"
        apiUrl="https://fakestoreapi.com/products"
      />
    </>
  );
};

export default Home;
