import React, { useState } from "react";
import "./product.css";

const Product = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const total = (data.price * quantity).toFixed(2);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Price: ${data.price.toFixed(2)}</p>
      <p>
        Quantity:{" "}
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </p>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Product;