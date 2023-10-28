import React, { useState, useContext } from "react";
import "./product.css";
import DataContext from "./dataContext";

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(DataContext).addToCart;

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleAdd() {
    let prodForCart = {
      ...props.data,
      quantity: quantity,
    };
    addToCart(prodForCart);
  }

  const total = (props.data.price * quantity).toFixed(2);

  return (
    <div className="product">
      <img src={"/images" + props.data.image} alt="placeholder" />
      <h2>{props.data.name}</h2>
      <p>Price: ${props.data.price.toFixed(2)}</p>
      <p>
        Quantity:{" "}
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </p>
      <p>Total: ${total}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default Product;