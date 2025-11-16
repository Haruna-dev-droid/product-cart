import React from "react";
import { useState, useEffect } from "react";
import Data from "../data.json";
import { useCart } from "./CartContext.jsx";
// import Cart from "./Cart.jsx";

export default function DessertsList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Product List</h1>
      <div className="grid grid-cols-3 gap-15 p-20">
        {products.map((product) => (
          <div key={product.id} className="border p-4 ">
            <img
              src={product.image}
              className="object-cover w-40 h-40  md:w-60 md:h-60 lg:w-80 lg:h-80 mx-auto mb-4"
              alt=""
            />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-600">
              {product.description
                ? product.description.substring(0, 65) + "..."
                : "No description available"}
            </p>
            <p className="text-green-600 font-bold">${product.price}</p>
            <button className="bg-red-400" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
