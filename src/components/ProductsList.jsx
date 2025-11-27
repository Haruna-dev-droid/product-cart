import React from "react";
import { useState, useEffect } from "react";
import Data from "../data.json";
import { useCart } from "./CartContext.jsx";
import SearchFilter from "./SearchFilter.jsx";
import ProductFilter from "./ProductFilter.jsx";

// import Cart from "./Cart.jsx";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addToCart } = useCart();
  const [showProduct, setShowProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((p) => {
        if (selectedCategory === "Men's Clothes")
          return p.category === "men's clothing";
        if (selectedCategory === "Women's Clothes")
          return p.category === "women's clothing";
        if (selectedCategory === "Jewelries") return p.category === "jewelery";
        if (selectedCategory === "Electronics")
          return p.category === "electronics";
        return true;
      })
    : products;
  return (
    <div>
      {/* <SearchFilter products={products} /> */}
      <h1 className="text-3xl font-bold -mt-5 p-20 -mb-30 text-gray-700">
        Product List
      </h1>
      <div className="">
        <ProductFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-5 px-20">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="p-5 h-70 flex items-center justify-center mb-4 bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-full w-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h2 className="text-lg font-semibold mb-2 line-clamp-1">
              {product.title}
            </h2>
            <p className="text-gray-500 text-sm mb-3 line-clamp-2">
              {product.description
                ? product.description.substring(0, 65) + "..."
                : "No description available"}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <p className="text-green-600 font-bold">${product.price}</p>
              <button
                className="bg-black/50 hover:bg-black/70 text-white text-sm px-3 py-2 rounded-lg transition-all duration-300"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
