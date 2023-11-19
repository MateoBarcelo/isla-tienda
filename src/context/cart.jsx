import { createContext } from "react";
import { cartReducer } from "../reducers/cart";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext()

const initialState = []

export function CartProvider({children}) {
    const {cart, addToCart, removeFromCart, clearCart} = useCartReducer()

    return (<CartContext.Provider value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
    }}>
        {children}
    </CartContext.Provider>)
}