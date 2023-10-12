import Product from "../components/product";
import DataService from "../services/dataService";
import "./catalog.css";
import { useEffect, useState } from "react"; // this is a hook

function Catalog() {
    //create a state variable to hold the list of prods
    const [products, setProducts] = useState([]);

    //let array = [];

    //when the component is loaded, run this code
    useEffect(function(){
        console.log("catalog component is loaded");
        loadCatalog();
        //this is very similar to the init
    }, []);

    function loadCatalog(){
        //get the products that i have in the data service
        let service = new DataService();
        let prods = service.getCatalog();
        console.log(prods);
        setProducts(prods);
    }

    return (
        <div className="catalog">
            <h1>Our amazing catalog</h1>
            <h2>Currently we have {products.length} products for you</h2>
            {products.map(arrowProducts => <Product data={arrowProducts}/>)}
        </div>
    );
}

    export default Catalog;
