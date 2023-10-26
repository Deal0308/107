import React, { useState } from "react";
import Product from "../components/product";
import "./catalog.css"


function Home(props) {
  const { catalog } = props;

  const arrowProducts = catalog.map((product) => (
    <Product key={product.id} data={product} addToCart={addToCart} />
  ));

  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setTotal(total + product.price);
  };

  return (
    <div className="home">
      <h1>Our amazing catalog</h1>
      <h2>Currently we have {catalog.length} products for you</h2>
      <br />
      <div className="products">{arrowProducts}</div>
      <p>Total: ${total}</p>
    </div>
  );
}

export default Home;