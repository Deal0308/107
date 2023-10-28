import "./cart.css"
import React from "react";
import Product from "../components/product";

function Cart(props) {
    const { cart } = props;
    
    const arrowProducts = cart?.map((product) => (
        <Product key={product.id} data={product} />
    ));
    
    return (
        <div className="cart">
        <h1>Cart</h1>
        <div className="products">{arrowProducts}</div>
        </div>
    );
    }
    
export default Cart;