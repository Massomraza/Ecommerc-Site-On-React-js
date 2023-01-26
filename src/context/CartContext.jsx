import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { CartReducer } from "../Reducer/CartReduce";

const CartContext = createContext();

    const getCartData = ()=>{
        const getLocalStorageData = localStorage.getItem('cartData');

        if(getLocalStorageData === []){
            return []
        }else {
            return JSON.parse(getLocalStorageData);

        }
    }
    const initialState = {
        cart: getCartData(),
        total_item: '',
        total_amount: '',
        shipping_fee: 50000,
    }
export const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(CartReducer, initialState);
    const addToCart = (id, color, amount, product)=>{

        dispatch({type: 'CART', payload: {id, color, amount, product}})
    }

    const removeItem = (id)=>{
        dispatch({type: 'REMOVE', payload: id});
    }

    useEffect(()=>{
        dispatch({type: 'TOTAL_QTY'});
        dispatch({type: 'SUB_TOTAL'});
        localStorage.setItem('cartData', JSON.stringify(state.cart));
    }, [state.cart, state.total_item]);                                                               

    const clearCart = ()=>{
        dispatch({type: "CLEAR_CART"});
    }
    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart}}>{children}</CartContext.Provider>
};

export const CartHook = ()=>{
    return useContext(CartContext);
}