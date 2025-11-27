import React from "react";
import { useState, useEffect } from "react";
import Image1 from "../assets/images/pixelcut-export (26).png";
import SearchFilter from "./SearchFilter.jsx";
import Logo from "./Logo.jsx";
import Icon from "../assets/images/icon-add-to-cart.svg";
import { useCart } from "./CartContext.jsx";
import Cart from "./Cart.jsx";

function LandingPage({ products }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function toggleCart() {
    setCartIsOpen(!cartIsOpen);
  }
  const {
    addToCart,
    cart,
    removeFromCart,
    clearCart,
    decreaseQuantity,
    getTotalPrice,
    confirmCart,
  } = useCart();

  return (
    <div className=" bg-linear-to-r from-black to-black/95 text-white ">
      <div className=" p-4 ">
        <div className=" bg-black/60 backdrop-blur-md fixed top-2 flex gap-80 p-2 h-12 font-bold  justify-between  items-center rounded-full">
          <span className="flex items-center -ml-4">
            <Logo size={50} color={"#111"} />
          </span>
          <div className="mr-auto">
            <SearchFilter products={products} />
          </div>
          <ul className="flex gap-8 items-center mr-6">
            <li className="relative">
              <img src={Icon} alt="" className="object-cover" />
              <span
                onClick={toggleCart}
                className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
              >
                {cart.length}
              </span>
            </li>

            <li>
              {" "}
              <a href="">Contact</a>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="relative mt-10 flex-col md:flex-row items-center justify-center min-h-screen p-20 gap-8 ">
        {/* Text Section */}
        <div className="z-10 relative">
          <h1 className="tracking-[2rem] text-[11rem] bottom-10 relative text-center font-bold bg-gradient-to-r from-white/30 via-white/20 to-gray-200/5 bg-clip-text text-transparent">
            DR!PPING
          </h1>
          <div className="-mt-15">
            <h1 className="text-4xl font-bold text-center my-3">
              Welcome to Our Store!
            </h1>
            <p className="mb-8 text-center">
              Discover amazing products at unbeatable prices. Start shopping
              now!
            </p>
            <div className="flex justify-center">
              <button className="bg-white/70 font-bold text-black px-6 py-3 rounded-full hover:bg-gray-800">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Image Behind */}
        <img
          src={Image1}
          alt=""
          className="mx-auto w-md absolute  right-50 left-50 top-1 opacity-90"
        />
      </div>

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        decreaseQuantity={decreaseQuantity}
        getTotalPrice={getTotalPrice}
        confirmCart={confirmCart}
        isOpen={cartIsOpen}
        onClose={() => setCartIsOpen(false)}
      />
    </div>
  );
}

export default LandingPage;
