import React from "react";
// import { useState } from "react";
import { useCart } from "./CartContext.jsx";
import CheckOut from "./CheckOut.jsx";
import Icon from "../assets/images/icon-remove-item.svg";

function Cart({ isOpen, onClose }) {
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);

  const {
    addToCart,
    cart,
    removeFromCart,
    clearCart,
    decreaseQuantity,
    getTotalPrice,
    confirmCart,
  } = useCart();

  if (!isOpen) return null;

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };
  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
      ></div>
      <div
        className={`fixed bottom-0 left-0 w-full bg-black/60 text-white backdrop-blur-md
                    rounded-t-2xl shadow-2xl z-50 transition-transform duration-300 ease-in-out
                    transform translate-y-0 p-4`}
      >
        <h1 className="text-2xl font-bold">Your Cart ( {cart.length} )</h1>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b border-white/20 items-center my-4 p-2  "
          >
            {" "}
            <div className="flex items-center gap-3">
              <button onClick={() => removeFromCart(item.id)}>
                <img src={Icon} alt="Remove" width="18" />
              </button>

              <img
                src={item.image}
                alt={item.title}
                width="50"
                className="bg-gray-200 p-2 rounded-lg"
              />

              <h2 className="text-sm">{item.title.substring(0, 15) + "..."}</h2>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => addToCart(item)}
                  className=" w-5 h-5 flex items-center justify-center  rounded"
                >
                  +
                </button>
                <p className="text-sm">{item.quantity}</p>

                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className=" w-5 h-5 flex items-center justify-center bg-black/60 rounded-full"
                >
                  -
                </button>
              </div>
              <div>
                <p className="text-[12px]">Price: ${item.price}</p>
              </div>
            </div>
          </div>
        ))}
        <h2 className="font-bold mb-5 flex justify-end">
          Total: ${getTotalPrice()}
        </h2>
        <div className="flex justify-between gap-4">
          <button
            onClick={clearCart}
            className="rounded-full cursor-pointer
    font-semibold
    text-white
    bg-white/30
    backdrop-blur-md
    border border-white/40
    shadow-lg
    hover:bg-white/40
    transition p-2 px-5 "
          >
            Clear Cart
          </button>
          <button
            onClick={handleOpenCheckout}
            className="
    px-5 py-2
    rounded-full
    font-semibold
    text-white
    bg-orange-500/80
    backdrop-blur-md
    border border-white/40
    shadow-lg
    hover:bg-orange-500
    cursor-pointer
    transition
  "
          >
            Confirm Order
          </button>
        </div>
      </div>
      <CheckOut
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        cart={cart}
        total={getTotalPrice()}
      />
    </>
  );
}

export default Cart;
