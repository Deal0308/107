import './cartProducts.css'

function CartProducts(props) {

    function getTotal() {
        const total = props.data.price * props.data.quantity;
        return total.toFixed(2);
    }

    return (
        <div className="cart-products">
            <img src={"/images" + props.data.image }alt="placeholder" />
            <h4>{props.data.title}</h4> 
            <p>{props.data.category}</p>      
            <label>{props.data.price}</label>
            <label>{props.data.quantity}</label>   
            <label>${getTotal()}</label> 
        </div>
    );
}

function CartSummary(props) {
    return (
        <div className="cart-summary">
            <h2>Cart Summary</h2>
            <div className="total-section">
                <h3>Total:</h3>
                <label>${props.total}</label>
            </div>
            <div className="discount-section">
                <h3>Discount Coupon:</h3>
                <input type="text" placeholder="Enter coupon code" />
                <button>Apply</button>
            </div>
            <div className="payment-section">
                <h3>Payment Method:</h3>
                <select>
                    <option value="credit-card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="apple-pay">Apple Pay</option>
                </select>
            </div>
        </div>
    );
}

export { CartProducts, CartSummary };
export default CartProducts;