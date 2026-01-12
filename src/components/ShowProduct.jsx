// import React from "react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


export default function ShowProduct({ product, onBack }) {
  if (!product) return null;

  return (
    <div className="p-10">
      <button
        onClick={onBack}
        className="mb-5 px-4 py-2 bg-gray-300 rounded-lg"
      >
        Back
      </button>

      <div className="flex gap-10">
        <div className="w-80 h-80 bg-gray-100 rounded-xl p-5 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-full"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-600 max-w-lg mb-4">{product.description}</p>
          <p className="text-green-600 text-2xl font-bold mb-4">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
