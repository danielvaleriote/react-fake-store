import ProductsPage from "../components/ProductsPage";

const MaleClothing = () => {
  return (
    <>
      <ProductsPage
        pageName="Male Clothing"
        apiUrl="https://fakestoreapi.com/products/category/men's clothing"
      />
    </>
  );
};

export default MaleClothing;
