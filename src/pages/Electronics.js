import { useFetch } from "../hooks/useFetch";
import LoadingIcon from "../components/layout/LoadingIcon";
import Product from "../components/Product";
import ProductsContainer from "../components/layout/ProductsContainer";

export default function Electronics() {
  const { isLoading, products } = useFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  return (
    <div>
      {isLoading ? (
        <LoadingIcon />
      ) : (
        products.map((product) => (
          <ProductsContainer>
            <Product obj={product} key={product.id} />
          </ProductsContainer>
        ))
      )}
    </div>
  );
}
