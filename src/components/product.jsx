import "./product.css";
import QuantityPicker from "../components/quantityPicker";
import { useEffect} from "react";

function Product(props){

    useEffect(function(){
        console.log("product component is loaded");
    }, []);
    function onQuantityChange(qty){

        
    }

    return (
        <div className="product">
           <h5>{props.data.title}</h5>
              <img src={"../images/" + props.data.image} alt="placeholder"></img>
              <div>
                <label>Price:{props.data.price}</label>
                <label>Total:</label>
              </div>
                <div>
                    <QuantityPicker onChange={onQuantityChange}/>
                    <button className="btn btn-sm btn-info">Add</button>
                </div>
        </div>
    );

}

export default Product;