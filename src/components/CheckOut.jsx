import React from "react";
import { useCart } from "./CartContext.jsx";
import { useState, useEffect } from "react";
import Cart from "./Cart.jsx";

function CheckOut({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  const { cart, getTotalPrice } = useCart();

  return (
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        {children}
        <h1>✅</h1>
        <h1>Order Confirmed</h1>
        {cart.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>
              {item.quantity} × ${item.price} = $
              {(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
        <p>Total: ${getTotalPrice().toFixed(2)}</p>
        {/* <Cart /> */}
        <button onClick={onClose}>Start New Order</button>
      </div>
    </div>
  );
}

export default CheckOut;
