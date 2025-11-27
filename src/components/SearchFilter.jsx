import React, { use } from "react";
import { useState, useEffect } from "react";

function SearchFilter({ products }) {
  const [search, setSearch] = useState("");
  //   const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!search) {
      setResults([]);
      return;
    }
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filtered);
  }, [search, products]);
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        className="bg-white/20  rounded-full p-1.5 px-8 text-white w-80 relative z-20"
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <button className="bg-black rounded-full p-2">🔍</button> */}
      {results.length > 0 && (
        <div className="absolute top-full mt-2 left-0 w-full bg-white/80 backdrop-blur-md  text-black rounded-lg p-4 grid grid-cols-1 gap-4 shadow-lg z-50 max-h-96 overflow-y-auto hide-scrollbar">
          {results.map((product) => (
            <div key={product.id} className="p-2 border-b-2 border-gray-100">
              <img
                src={product.image}
                className="object-cover w-sm h-sm  md:w-60 md:h-60 lg:w-20 lg:h-20 mx-auto mb-4"
                alt=""
              />
              <h2>{product.title}</h2>
              {/* <p>{product.description}</p> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchFilter;
