const initialState = []

export const cartReducer = (state, action) => {
    const {type, payload} = action
    const id = payload?.id
    switch(type) {
        case 'ADD_TO_CART': {
            const productInCart = state.findIndex(item => item.id === id)

            if(productInCart >= 0) {
                const newCart = structuredClone(state) //deep copy of array
                newCart[productInCart].quantity += 1
                
                return newCart
                
            }
    
            return [
                ...state,
                {
                    ...payload,
                    quantity: 1
                }
            ]
        }

        case 'REMOVE_FROM_CART': {
            const productInCart = state.findIndex(item => item.id === id)
            const { quantity } = payload
            if(quantity > 1) {
                const newCart = structuredClone(state) //deep copy of array
                newCart[productInCart].quantity -= 1
                
                return newCart
                
            }

            return state.filter(item => item.id !== id)
        }

        case 'CLEAR_CART': {
            return initialState
        }
    }

    return state
}