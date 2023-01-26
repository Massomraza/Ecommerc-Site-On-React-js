import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from "../Reducer/reducer";

export const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleError: false,
    singleProduct: {},
    isSingleLoading: false,
    sortValue: "lowest"
}

export const AppProvider = ({children})=>{
    const API = "https://api.pujakaitem.com/api/products";
    const [state, dispatch] = useReducer(reducer, initialState);

    const productData = async (url)=>{
        dispatch({type: 'LOADING'});
        try {
            const res = await axios.get(url);            
            const products = await res.data;
            dispatch({type: 'SET_API_DATA', payload: products});
        } catch (error) {
            dispatch({type: 'API_ERROR'})
        }
    };

    const singleProductData = async (url)=>{
        dispatch({type: 'SINGLE_LOADING'});
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type: 'SINGLE_PRODUCT', payload: singleProduct});
        } catch (error) {
            dispatch({type: 'SINGLE_PRODUCT_ERROR'});
        }
    }
   useEffect(()=>{
    productData(API);
   },[]);
   
    
    return <AppContext.Provider value={{...state, singleProductData}}>{children}</AppContext.Provider>
};

export const ContextHook = ()=>{
    return useContext(AppContext);
}