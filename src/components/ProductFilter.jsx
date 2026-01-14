import React from "react";

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
      {/* Mobile: dropdown */}

      <div className="block md:hidden px-4 mt-12">
        <label htmlFor="filter-select" className="sr-only">
          Filter products
        </label>
        <select
          name=""
          id="filter-select"
          className="bg-black/30 rounded-lg p-2 mt-10 ml-2  w-40 focus:outline-none focus:bg-black/40 text-white"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop+: pill buttons */}
      <div className="hidden md:flex gap-4 mt-12 px-20">
        {categories.map((category) => (
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
