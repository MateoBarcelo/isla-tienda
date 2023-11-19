import { cartReducer } from "../reducers/cart"
import { useReducer } from "react"

const initialState = []

export function useCartReducer() {
    
    const [state, dispatch] = useReducer(cartReducer, initialState)
    //const [cart, setCart] = useState([])

    const addToCart = (product) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = (product) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART',
        payload: null
    })

    return ({
        cart: state,
        addToCart,
        removeFromCart,
        clearCart
    })
}