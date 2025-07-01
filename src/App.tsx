import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductsList from "./pages/ProductsList";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");

      const json = await response.json();

      // console.log(json.products);
      setItems(json.products);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products">
          <Route index element={<ProductsList items={items}/>} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
