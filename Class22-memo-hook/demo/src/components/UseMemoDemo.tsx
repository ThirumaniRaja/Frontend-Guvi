import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  // mock products
  const products = [
    "LAPTOP",
    "MOUSE",
    "KEYBOARD",
    "PEN",
    "PENCIL",
    "TV",
    "Washing Machine",
  ];

  // logic to filter the products, run only when `search` changes
  const filteredProducts = useMemo(() => {
    console.log("Filtering the products");
    return products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <input
        placeholder="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>

      {filteredProducts.map((product) => (
        <p key={product}>{product}</p>
      ))}
    </div>
  );
}

export default UseMemoDemo;