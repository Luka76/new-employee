import { Card } from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
};

const ProductsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  function handleSearch(word: string) {
    setSearchTerm(word);
  }

  const filteredItems = items.filter((item: Product) => {
    if (searchTerm === "") {
      return item;
    } else {
      return item.title.toLowerCase().includes(searchTerm);
      //?? item.description.toLowerCase().includes(searchTerm)
      //?? item.category.toLowerCase().includes(searchTerm);
    }
  });

  return (
    <div>
      <div className="flex m-3 pt-2">
        <h1 className="text-3xl text-center font-sans max-sm:hidden">
          Products list
        </h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading && (
        <div className="flex justify-center items-center h-32">
          <p className="text-lg">Loading products...</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center h-32">
          <p className="text-lg">Something went wrong...</p>
        </div>
      )}

      {!loading && !error && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center w-full h-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item: Product) => (
              <>
                <li key={item.id}>
                  <Card {...item} />
                </li>
              </>
            ))
          ) : (
            <div className="flex col-span-full justify-center items-center h-32">
              <p className="text-lg text-gray-500">
                {searchTerm
                  ? `No products matching ${searchTerm}`
                  : "No products available"}
              </p>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default ProductsList;
