import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductsList from "./components/ProductsList.jsx";
import Cart from "./components/Cart";
import CartProvider from "./components/CartContext.jsx";
import LandingPage from "./components/LandingPage.jsx";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <CartProvider>
      <LandingPage products={products} />
      <ProductsList />
      <Cart />
    </CartProvider>
  );
}

export default App;
