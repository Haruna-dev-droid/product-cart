import React from "react";
import { useCart } from "./CartContext.jsx";
import { useState, useEffect } from "react";
import Cart from "./Cart.jsx";

function CheckOut({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const { cart, getTotalPrice, clearCart } = useCart();
  function handleClick(onClose, clearCart) {
    onClose();
    clearCart();
  }

  return (
    <div
      onClick={onClose}
      className="text-gray-600 fixed inset-0 bg-gray-900/60 backdrop-blur-lg bg-opacity-50 flex items-center justify-center z-50 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white p-6 rounded-lg text-center shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 max-h-[80vh] overflow-y-auto"
      >
        {children}
        <h1 className="text-8xl text">✅</h1>
        <h1 className="text-2xl font-bold mt-4">Order Confirmed</h1>
        {cart.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col items-center justify-center my-3 p-2 border-b border-gray-300">
              <h2>{item.title}</h2>
              <p>
                {item.quantity} × ${item.price} = $
                {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
        <p className="font-bold text-xl mb-2">
          Total: ${getTotalPrice().toFixed(2)}
        </p>
        {/* <Cart /> */}
        <button
          onClick={() => handleClick(onClose, clearCart)}
          className="bg-gray-700 text-white font-semibold p-2 rounded-full px-3"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default CheckOut;
