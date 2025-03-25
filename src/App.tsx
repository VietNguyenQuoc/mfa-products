import { useEffect } from "react";
import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    description: "This is a description of product 1",
  },
  {
    id: 2,
    title: "Product 2",
    price: 20,
    description: "This is a description of product 2",
  },
  {
    id: 3,
    title: "Product 3",
    price: 30,
    description: "This is a description of product 3",
  },
  {
    id: 4,
    title: "Product 4",
    price: 40,
    description: "This is a description of product 4",
  },
  {
    id: 5,
    title: "Product 5",
    price: 50,
    description: "This is a description of product 5",
  },
];

function App() {
  return (
    <div>
      <h2>Search products</h2>
      <input type="text" placeholder="Search..." />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() =>
              dispatchEvent(
                new CustomEvent("mfe-cart:add-to-cart", {
                  detail: { id: product.id, name: product.title },
                })
              )
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
