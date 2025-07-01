import { Card } from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";

const ProductsList = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");

      const json = await response.json();

      // console.log(json.products);
      setItems(json.products);
    };

    fetchData();
  }, []);

  function handleSearch(word: string) {
    setSearchTerm(word);
  }

  const filteredItems = items.filter((item) => {
    if (searchTerm === "") {
      return item;
    } else {
      return item.includes(searchTerm);
    }
  });

  return (
    <div>
      <div className="flex m-3 pt-2">
        <h1 className="text-3xl text-center font-sans">Products list</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center w-full h-auto">
        {filteredItems.length > 1
          ? filteredItems.map((item) => (
              <>
                <li key={item.id}>
                  <Card {...item} />
                </li>
              </>
            ))
          : items.map((item) => (
              <>
                <li key={item.id}>
                  <Card {...item} />
                </li>
              </>
            ))}
      </ul>
    </div>
  );
};

export default ProductsList;
