import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DessertsList from "./components/DessertsList";
import Cart from "./components/Cart";
import CartProvider from "./components/CartContext.jsx";

function App() {
  return (
    <CartProvider>
      <DessertsList />
      <Cart />
    </CartProvider>
  );
}

export default App;
