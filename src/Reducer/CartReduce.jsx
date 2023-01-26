export const CartReducer = (state, action) => {

    switch (action.type) {
        case 'CART':
            const { id, color, amount, product } = action.payload;

            const existProduct = state.cart.find((c)=>{
                return c.id == id + color;
            });
            if(existProduct){
                let updateProduct = state.cart.map((c)=>{
                    if(c.id == id + color){
                        let newAmount = c.quantity + amount;

                        if(c.quantity >= c.max){
                            newAmount = c.max;
                        }

                        return {
                            ...c,
                            quantity: newAmount
                        }
                    }else{
                        return c
                    }
                });

                return {
                    ...state,
                    cart: updateProduct
                }
            } else {
                const cartProduct = {
                    id: id + color,
                    color,
                    image: product.image[0].url,
                    name: product.name,
                    price: product.price,
                    max: product.stock,
                    quantity: amount,
                    stock: product.stock
                }
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        cartProduct
                    ]
                }
            }

        case 'REMOVE':

            const removeItm = state.cart.filter((c) => {
                return c.id !== action.payload
            });
            return {
                ...state,
                cart: removeItm

            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            }
        case 'TOTAL_QTY':
            const totalQty = state.cart.reduce((accum, c)=> {
                const {quantity} = c;
                accum = accum + quantity;
                return accum
            }, 0);
            return{
                ...state,
                total_item: totalQty
                
            }
        case 'SUB_TOTAL':
            let subTotal = state.cart.reduce((acc, cE, i)=>{
                const {price, quantity} = cE        
            }, 0);
            return {
                ...state,
                
            }

        default:
            return state
    }

}