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
                catalog: [
                    {
                        id: 1,
                        name: "Product 1",
                        price: 100,
                    },
                    {
                        id: 2,
                        name: "Product 2",
                        price: 200,
                    },
                    {
                        id: 3,
                        name: "Product 3",
                        price: 300,
                    },
                    {
                        id: 4,
                        name: "Product 4",
                        price: 400,
                    },
                    {
                        id: 5,
                        name: "Product 5",
                        price: 500,
                    },
                ],
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;
