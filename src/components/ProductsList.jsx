import React, { useState, useEffect } from "react";
import Data from "../data.json";
import { useCart } from "./CartContext.jsx";
import SearchFilter from "./SearchFilter.jsx";
import ProductFilter from "./ProductFilter.jsx";
import Icon from "../assets/images/icon-add-to-cart.svg";

export default function ProductsList({ products: externalProducts, onSelect }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    // If parent sends products, use them. Otherwise fetch.
    if (externalProducts) {
      setProducts(externalProducts);
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  }, [externalProducts]);

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
      <h1 className="text-3xl font-bold -mt-5 md:p-20 py-10 px-7 -mb-30 text-gray-700">
        Product List
      </h1>

      <ProductFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-5 px-5 md:px-20">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelect && onSelect(product)} // ← NEW
            className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer"
          >
            <div className="p-5 md:h-70 h-30 flex items-center justify-center mb-4 bg-gray-100 rounded-xl overflow-hidden">
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
              <p className="text-orange-600 font-bold">${product.price}</p>

              <button
                className="bg-black/20 hover:bg-black/40 text-white text-sm px-3 py-2 rounded-lg transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                <img src={Icon} alt="Add to Cart" className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
