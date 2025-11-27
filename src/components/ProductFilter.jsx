import React from "react";
import { useState, useEffect } from "react";

export default function ProductFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "Men's Clothes",
    "Women's Clothes",
    "Jewelries",
    "Electronics",
  ];
  return (
    <div>
      <div className="flex gap-4 mt-15 px-20">
        {categories.map((category) => (
          <div>
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`p-2 rounded-full ${
                selectedCategory === category
                  ? "bg-gray-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {category}
            </button>
          </div>
        ))}
        <button
          onClick={() => setSelectedCategory("")}
          className="p-2 rounded-full bg-gray-500 text-white"
        >
          All
        </button>
      </div>
    </div>
  );
}
