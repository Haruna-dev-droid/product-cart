import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductsList from "./components/ProductsList.jsx";
import Cart from "./components/Cart";
import CartProvider from "./components/CartContext.jsx";
import LandingPage from "./components/LandingPage.jsx";
import ShowProduct from "./components/ShowProduct.jsx";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage products={products} />} />
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ShowProduct />} />
          <Cart />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
