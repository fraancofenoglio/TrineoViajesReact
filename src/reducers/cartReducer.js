import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART} from "../types/cartTypes";
import {addItem, removeItem} from "./reducerUtils"

const initialState = {
    cartItems: []
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:

            return {
                ...state, cartItems: addItem(state.cartItems, action.payload) // agregar funcion desde utils
            }

        case REMOVE_FROM_CART: 

            return {
                ...state, cartItems: removeItem(state.cartItems, action.payload)
            }

        case REMOVE_ALL_FROM_CART: 

            return {
                ...state, cartItems:[]
            }
    
        default:
            return state;
    }

}

export default cartReducer

