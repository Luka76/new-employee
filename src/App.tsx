import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductsList from "./pages/ProductsList";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/Product";

function App() {

  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products">
          <Route index element={<ProductsList />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
