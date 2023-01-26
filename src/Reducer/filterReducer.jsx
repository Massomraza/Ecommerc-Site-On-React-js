
const filterReducer = (state, action) => {
 switch (action.type) {
    case 'FILTER_PRODUCT':
        const priceData = action.payload.map((c, i)=>{
            return c.price;
        });

        // 1st way 
        // const maxPrice = Math.max.apply(null, priceData);

        // 2nd way 
        // const maxPrice = priceData.reduce((initialValue, cE)=> Math.max(initialValue, cE), 0);
        
        // 3rd way 
        const maxPrice = Math.max(...priceData);
        return {
            ...state,
            filterProducts: [...action.payload],
            allProducts: [...action.payload],
            filters: {
                ...state.filters,
                maxPrice,
                price: maxPrice
            }
        }
    case 'GRID':
        return {
            ...state,
            gridView: true,
            listView: false
        }
    case 'LIST':
        return {
            ...state,
            gridView: false,
            listView: true
        }
    case 'SORTING':
        return {
            ...state,
            sortValue: action.payload
        }
    case 'SORT_PROD':
        const {allProducts, sortValue} = state;
        const tempProd = [...allProducts];
        const sortMethod = (a, b)=>{
            switch (sortValue) {
                case 'lowest':
                    return a.price - b.price;
                case 'highest':
                    return b.price - a.price;
                case 'a-z':
                    return a.name.localeCompare(b.name);
                case 'z-a':
                    return b.name.localeCompare(a.name);
            }
        }
        return{
            ...state,
            filterProducts: tempProd.sort(sortMethod)
        }
    case 'SEARCH':
        const {name, value} = action.payload;
        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value,
            }
        }
    case 'SEARCH_PROD':
        let temp = [...state.allProducts];
        const {text, category, company, colors, price} = state.filters;
        if(text){
            temp = temp.filter((cE, index)=>{
                return cE.name.toLowerCase().includes(text);
            });
        }
        if(category !== 'all'){
            temp = temp.filter((cE)=>{
                return cE.category === category;
            });
        }
        if(company !== 'all'){
            temp = temp.filter((cE)=>{
                return cE.company.toLowerCase() === company.toLowerCase();
            });
        }
        if(colors != 'all'){
            temp = temp.filter((c)=>{
                return c.colors.includes(colors);
            })
        }
        if(price === 0){
            temp = temp.filter((c)=> c.price == price);
        }else{
            temp = temp.filter((c)=> c.price <= price);
        }
        
        return{
            ...state,
            filterProducts: temp
        }
    case 'CLEAR':
        debugger;
        return {
            ...state,
            filterProducts: [...state.allProducts],
        }
    default:
        return state
 }
}

export default filterReducer;