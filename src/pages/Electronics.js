import ProductsPage from "../components/ProductsPage";

const Electronics = () => {
  return (
    <>
      <ProductsPage
        pageName="Electronics"
        apiUrl="https://fakestoreapi.com/products/category/electronics"
      />
    </>
  );
};

export default Electronics;
