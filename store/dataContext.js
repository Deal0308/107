import { createContext } from "react";


// interface blueprint
// desribes the date ,but has no implementation



const DataContext = createContext({
    cart: [],
    users: {},
    addToCart: (product) => {},
    removeFromCart: (product) => {},

});

export default DataContext;