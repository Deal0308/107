import "./quantityPicker.css";
import { useEffect } from "react";
import { useState } from "react";



function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1);
    function increase(){
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }
    function decrease(){
        console.log("decrease clicked");
        if(quantity > 1){
            let val = quantity - 1;
            setQuantity(val);
            props.onChange(val);
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
