import { createContext } from "react";
import { cartReducer } from "../reducers/cart";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext()

const initialState = []

export function CartProvider({children}) {
    const {cart, addToCart, removeFromCart, clearCart} = useCartReducer()

    const total = cart.reduce((acc, product) => {
        return acc + product.price * product.quantity
    }, 0)
    return (<CartContext.Provider value={{
        cart,
        total,
        addToCart,
        removeFromCart,
        clearCart
    }}>
        {children}
    </CartContext.Provider>)
}