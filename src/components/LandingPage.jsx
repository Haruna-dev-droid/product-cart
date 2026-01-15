import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Image1 from "../assets/images/pixelcut-export (26).png";
import SearchFilter from "./SearchFilter.jsx";
import Logo from "./Logo.jsx";
import Icon from "../assets/images/icon-add-to-cart.svg";
import { useCart } from "./CartContext.jsx";
import Cart from "./Cart.jsx";

function LandingPage({ products }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="z-50 relative p-4 ">
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sign Up
          </NavLink>
          <div className=" md:text-white  backdrop-blur-md  top-2 flex gap-5 md:gap-53 p-2 h-12 font-bold mx-5 md:mx-15 justify-between text-white  items-center rounded-full relative">
            <span className="flex items-center -ml-14 md:-ml-4">
              <Logo size={50} color={"#eee"} />
            </span>

            {/* Desktop search (hidden on small screens) */}
            <div className="mr-auto hidden md:block">
              <SearchFilter products={products} />
            </div>

            {/* Desktop nav */}
            <ul className="hidden md:flex gap-8 items-center mr-6">
              <li className="relative cursor-pointer" onClick={toggleCart}>
                <img src={Icon} className="w-5 h-5 border-red-600" />
                <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cart.length}
                </span>
              </li>

              <li>
                <a href="">Contact</a>
              </li>

              <li>
                <NavLink to="/profile" className="border rounded-full p-1">
                  👤
                </NavLink>
              </li>
            </ul>

            {/* Mobile hamburger */}
            <button
              aria-controls="mobile-menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen(!navOpen)}
              className="md:hidden p-2 rounded-full -mr-6 hover:bg-gray-100 "
            >
              {!navOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>

            {/* Mobile menu dropdown */}
            {navOpen && (
              <div
                id="mobile-menu"
                className="fixed right-2 top-14
    bg-white text-black
    rounded-lg p-4
    flex flex-col gap-3
    shadow-2xl w-56
    z-[9999]"
              >
                {/* <div onClick={() => setNavOpen(false)}>
                 <SearchFilter products={products} />
               
              </div> */}
                <div className="flex flex-col  justify-between">
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => {
                      toggleCart();
                      setNavOpen(false);
                    }}
                  >
                    <img src={Icon} className="w-5 h-5" />
                    <span className="ml-2 font-bold">
                      Cart{" "}
                      {/* <span className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cart.length}
                    </span> */}
                    </span>
                  </div>

                  <NavLink
                    onClick={() => setNavOpen(false)}
                    to="/profile"
                    className="mt-6 p-1"
                  >
                    Profile
                  </NavLink>
                </div>
                <a href="" onClick={() => setNavOpen(false)} className="py-2">
                  Contact
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="relative mt-20 md:mt-10 flex-col md:flex-row items-center justify-center min-h-screen p-6 md:p-20 gap-8 ">
          {/* Text Section */}
          <div className=" relative">
            {/* <h1 className="tracking-[2rem] text-[11rem] bottom-10 relative text-center font-bold bg-gradient-to-r from-white/30 via-white/20 to-gray-200/5 bg-clip-text text-transparent">
            DR!PPING
          </h1> */}
            <h1 className="text-6xl font-bold md:mt-15 ">DR!PPING</h1>
            <div className="mt-10">
              <h1 className="text-4xl font-semibold -mt-4 my-3 md:-mt-8">
                Welcome to Our Store!
              </h1>
              <p className="mb-8 ">
                Discover amazing products at unbeatable prices. Start shopping
                now!
              </p>
              <div className="flex justify-center md:-mt-2 items-center gap-4 w-44 p-3 bg-white rounded-full cursor-pointer hover:scale-105 transition-transform duration-300">
                <button className="font-bold text-black">Shop Now</button>

                <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-lg">
                  &rarr;
                </span>
              </div>
              <div>
                <div className="mt-9 flex gap-6 md:gap-110 border-t pt-6 ">
                  <div>
                    <h2 className="text-2xl font-bold">500+</h2>
                    <p className="text-gray-300">Products</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">1K+</h2>
                    <p className="text-gray-300">Happy Customers</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">50+</h2>
                    <p className="text-gray-300">Brands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Behind */}
          {/* <img
          src={Image1}
          alt=""
          className="mx-auto w-md absolute  right-50 left-50 top-1 opacity-90"
        /> */}
        </div>
      </motion.div>
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
