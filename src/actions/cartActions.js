import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART} from "../types/cartTypes";


export const add_to_cart = (product) => ({type: ADD_TO_CART, payload: product});

export const remove_from_cart = (id) => ({type: REMOVE_FROM_CART, payload: id});

export const remove_all_from_cart = () => ({ type: REMOVE_ALL_FROM_CART});