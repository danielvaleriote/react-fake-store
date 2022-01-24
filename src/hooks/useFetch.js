import { useState, useEffect } from "react";

export function useFetch(url) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setProducts(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);
  return { isLoading, products };
}
