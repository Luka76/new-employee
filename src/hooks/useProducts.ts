import { useEffect, useState } from "react";
import type {Product} from '../types/types'

export function useProducts() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error(`Something went wrong! status: ${response.status}`);
        }

        const json = await response.json();
        setItems(json.products);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "An error occured while fetching products"
        );
      } finally{
        setLoading(false);
      }
    };

    fetchProducts()
  }, []);

  return {error, items, loading}
}
