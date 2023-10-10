// please create the comment structure as shown in the example below
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
            <button onClick={decrease}>-</button>
            <label>1</label>
            <button onClick={increase}>+</button>
       
        </div>
    );
}
export default QuantityPicker;