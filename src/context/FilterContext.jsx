import { useEffect, useReducer } from "react";
import { createContext, useContext } from "react";
import {ContextHook} from '../context/ProductContext';
import filterReducer from '../Reducer/filterReducer';

const FilterContext = createContext();

export const FilterProvider = ({children})=>{
    const {products} = ContextHook();
    const initialState = {
        filterProducts: [],
        allProducts: [],
        gridView: true,
        listView: false,
        sortValue: 'lowest',
        filters: {
            text: '',
            category: 'all',
            company: 'all',
            colors: 'all',
            maxPrice: 0,
            price: 0,
            minPrice: 0,
        }
    }
    const [state, dispatch] = useReducer(filterReducer, initialState);

    const setGridView = ()=>{
        return dispatch({type: "GRID"});
    };

    const setListView = ()=>{
        return dispatch({type: "LIST"});
    }
    const sortFilter = (event)=>{
        let sortv = event.target.value;
        dispatch({type: 'SORTING', payload: sortv});
    }
    const searchFilter = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        dispatch({type: 'SEARCH', payload: {name, value}});
    }
    const clearFilter = ()=>{
        dispatch({type: 'CLEAR'});
    }

    useEffect(()=>{
        dispatch({type: 'SEARCH_PROD'});
    }, [state.filters]);
    
    useEffect(()=>{
        dispatch({type: 'FILTER_PRODUCT', payload: products});
        dispatch({type: 'SORT_PROD'});
    },[products, state.sortValue]);


    return <FilterContext.Provider value={{...state, setGridView, setListView, sortFilter, searchFilter, clearFilter}}>{children}</FilterContext.Provider>
};

export const FilterHook = ()=>{
    return useContext(FilterContext);
}