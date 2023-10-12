import "./product.css";
import QuantityPicker from "../quantityPicker/quantityPicker";
import { useEffect} from "react";

function Product(props){

    useEffect(function(){
        console.log("product component is loaded");
    }, []);

    return (
        <div className="product">
           <h5>{props.data.title}</h5>
              <img src={"/images/products/" + props.data.image} alt="placeholder"></img>
              <div>
                <label>Price:{props.data.price}</label>
                <label>Total:</label>
              </div>
                <div>
                    <QuantityPicker></QuantityPicker>
                    <button className="btn btn-sm btn-info">Add</button>
                </div>
        </div>
    );

}

