import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ShowProduct() {
  const { id } = useParams(); // get id from route
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2 className="p-10 text-xl">Loading...</h2>;

  return (
    <div className="p-10 flex gap-10">
      {/* Image */}
      <div className="w-80 h-80 bg-gray-100 rounded-xl p-5 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
        <p className="text-gray-600 max-w-lg mb-4">{product.description}</p>
        <p className="text-green-600 text-2xl font-bold mb-4">
          ${product.price}
        </p>

        <button className="px-5 py-2 bg-black text-white rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
