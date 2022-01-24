import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const { isLoading, products } = useFetch("https://fakestoreapi.com/products");

  return (
    <div>
      <h1>Home</h1>
      {!isLoading &&
        products.map((product) => {
          return <h2>{product.title}</h2>;
        })}
    </div>
  );
}
