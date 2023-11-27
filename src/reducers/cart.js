import { useAuth } from "../context/auth";

const initialState = []

let newState;
export const cartReducer = (state, action) => {
    const {type, payload} = action
    const id = payload?.id
    switch(type) {
        case 'ADD_TO_CART': {
            const productInCart = state.findIndex(item => item.id === id)

            if(productInCart >= 0) {
                newState = structuredClone(state) //deep copy of array
                newState[productInCart].quantity += 1
               
            } else {
                newState = [
                    ...state,
                    {
                        ...payload,
                        quantity: 1
                    }
                ]
            }
            break;
        }

        case 'REMOVE_FROM_CART': {
            const productInCart = state.findIndex(item => item.id === id)
            const { quantity } = payload
            if(quantity > 1) {
                newState = structuredClone(state) //deep copy of array
                newState[productInCart].quantity -= 1
                console.log(newState)
                
            } else {
                newState = state.filter(item => item.id !== id)
                console.log(newState)
            }

            break;
        }

        case 'CLEAR_CART': {
            newState = initialState
            break;
        }
        
    }

    sessionStorage.setItem('cart', JSON.stringify(newState))

    return newState
}