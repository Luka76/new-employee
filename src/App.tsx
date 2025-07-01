import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductsList from "./pages/ProductsList";
import Navbar from "./components/Navbar";
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
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products">
          <Route index element={<ProductsList items={items} />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
