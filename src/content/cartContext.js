import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/cartReducer";

const cartInitialState = { 
    cartList: [],
    total: 0
};


const cartContext = createContext(cartInitialState);

export function CartProvider({children}){
   const [state, dispatch] = useReducer(CartReducer, cartInitialState)
   
   const addToCart = (product) => {
       const updateList = state.cartList.concat(product);
       const updateTotal = state.total + product.price

        dispatch({
            type:'ADD_TO_CART',
            payload: {
                products: updateList,
                total: updateTotal
            }
        })
   };
   
   const removeFromCart = (product) => {
        const updateList = state.cartList.filter((item) => item.id !== product.id );
        const updateTotal = state.total - product.price;

        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                products: updateList,
                total: updateTotal
            }
        })
   };


   function clearCart(){
        dispatch({
            type: 'CLEAR_CART',
            payload: {
                products: [],
                total: 0
            }
        })
   }
   

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart, 
        clearCart
    }

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}


export const useCart = () => useContext(cartContext);