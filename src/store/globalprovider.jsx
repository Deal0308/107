import { useState } from "react";
import DataContext from "./dataContext";

function GlobalProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ name: "John Doe" });

    function addToCart(product) {
        let copy = [...cart];

        let found = false;
        for (let i = 0; i < cart.length; i++) {
            const item = cart[i];
            if (item.id === product.id) {
                found = true;
                item.quantity += product.quantity;
            }
        }
        if (!found) {
            copy.push(product);
        }
        setCart(copy);
    }

    function removeFromCart() {}

    return (
        <DataContext.Provider
            value={{
                cart,
                user,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}
export default GlobalProvider;