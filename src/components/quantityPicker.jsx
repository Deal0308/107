import "./quantityPicker.css";
import { useState } from "react";


function QuantityPicker(){
    const [quantity, setQuantity] = useState(1);
    function increase(){
        let val = quantity + 1;
        setQuantity(val);
    }
    function decrease(){
        console.log("decrease clicked");
        if(quantity > 1){
            let val = quantity - 1;
            setQuantity(val);
        }
    };
    return (
        // render a couple of buttons and a label for the quantity picker
        <div className="quantityPicker">
            <button className="btn btn " onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
