import { useState } from "react";
import DataContext from "./dataContext";

function GlobalProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ name: "John Doe" });

    function addToCart(product) {
        setCart([...cart, product]);
    }

    function removeFromCart(product) {
        setCart(cart.filter((item) => item.id !== product.id));
    }

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
