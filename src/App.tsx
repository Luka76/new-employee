import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductsList from "./pages/ProductsList";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products">
          <Route index element={<ProductsList />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
