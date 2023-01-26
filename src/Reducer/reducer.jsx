const reducer = (state, action)=>{

    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: true,
            }
        case 'SET_API_DATA':
            const featuredP = action.payload.filter((value)=>{
                return value.featured === true;
            });
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featuredProducts: featuredP
            }
        case 'API_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'SINGLE_LOADING':
            return {
                ...state,
                isSingleLoading: true
            }
        case 'SINGLE_PRODUCT':
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload
            }
        case 'SINGLE_PRODUCT_ERROR':
            return {
                ...state,
                isSingleError: true,
            }
     
        default:
            return state;
    }
};

export default reducer;