/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getItem } from "../../services/LocalStorage";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const itemsCart = getItem('carrinho')
        if(itemsCart)
            setCart(getItem('carrinho'))
    }, [])

    return (
        <CartContext.Provider value={{ cart,setCart }}>
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart deve ser usado com CartProvider")
    }

    return context;
}

export { CartProvider, useCart };
