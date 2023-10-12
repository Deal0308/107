import React, { useState } from "react";
import Product from "../components/product";
import service from "../services/service";

const Catalog = () => {
  const [products, setProducts] = useState(service.getCatalog());
  const categories = ["All", ...service.getCategories()];

  const filter = (category) => {
    if (category === "All") {
      setProducts(service.getCatalog());
    } else {
      let list = [];
      for (let product of service.getCatalog()) {
        if (product.category === category) {
          let prod = <Product key={product.id} data={product} />;
          list.push(prod);
        }
      }
      setProducts(list);
    }
  };

  const clearFilters = () => {
    setProducts(service.getCatalog());
  };

  const arrowProducts = products.map((product) => (
    <Product key={product.id} data={product} />
  ));

  return (
    <div className="catalog">
      <h1>Our amazing catalog</h1>
      <h2>Currently we have {products.length} products for you</h2>
      <br />
      <button onClick={clearFilters} className="btn btn-sm btn-dark">
        Clear
      </button>
      {categories.map((category) => (
        <button key={category} onClick={() => filter(category)}>
          {category}
        </button>
      ))}
      {arrowProducts}
    </div>
  );
};

export default Catalog;