import { useContext } from "react";
import "./cart.css"
import DataContext from "../store/dataContext";
import CartProducts from "../components/cartProducts";

function Cart() {
    const cart  = useContext(DataContext).cart;
    
// add the quantity to the cart
    import { useContext } from "react";
    import "./cart.css";
    import DataContext from "../store/dataContext";
    import CartProducts from "../components/cartProducts";

    function Cart() {
        const cart = useContext(DataContext).cart;

        // add the quantity to the cart
        function getTotal() {
            let total = 0;
            for (let i = 0; i < cart.length; i++) {
                const product = cart[i];
                total += product.price * product.quantity;
            }
            return total.toFixed(2);
        }

        return (
            <div className="cart page">
                <h1 className="title"> Your Cart</h1>
                <h3>You have selected {getCount()} products</h3>
                <div className="parent">
                    <div className="list">
                        {cart.map((prod) => (
                            <CartProducts data={prod} key={prod.id} />
                        ))}
                    </div>
                    <aside>
                        <h4>Total</h4>
                        <h3>${getTotal()}</h3>
                        <hr />
                        <input type="text" placeholder="Coupon Code" />
                        <hr />
                        <button className="btn btn-dark">Apply</button>
                    </aside>
                </div>
            </div>
        );

    }
    export default Cart;