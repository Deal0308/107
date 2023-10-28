import React, { useState } from "react";
import Product from "../components/product";

function Home(props) {
  const [total, setTotal] = useState(0);
  const { catalog } = props;

  const addToCart = (product) => {
    setTotal(total + product.price);
  };

  const arrowProducts = catalog?.map((product) => (
    <Product key={product.id} data={product} addToCart={addToCart} />
  ));


 

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