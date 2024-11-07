import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer/filterReducer";


const filterIntialState = {
    productLists: [],
    inStockOnly: false,
    bestSellerOnly: false,
    sortby: null,
    rating: null
}

const FilterContent = createContext(filterIntialState);

export function FilterProvider({children}){
    const [state, dispatch] = useReducer(FilterReducer, filterIntialState);

    function initProductList(products){
        dispatch({
            type: "PRODUCT_LISTS",
            payload: {
                products: products
            }
        })
    };


    function bestSeller(products){
        return state.bestSellerOnly ? products.filter((product) => product.best_seller === true) : products
    }
  
    function inStock(products){
        return state.inStockOnly ? products.filter((product) => product.in_stock === true) : products
    }

    function sort(products){
        if(state.sortby === "LowToHigh"){
            return products.sort((a,b) => Number(a.price) - Number(b.price))
        }

        if(state.sortby === "highToLow"){
            return products.sort((a,b) => Number(b.price) - Number(a.price))
        }

        return products;
    }

    function rating(products) {
        if(state.rating === '4STARABOVE'){
            return products.filter((product) => product.rating >= 4)
        }
        if(state.rating === '3STARABOVE'){
            return products.filter((product) => product.rating >= 3)
        }
        if(state.rating === '2STARABOVE'){
            return products.filter((product) => product.rating >= 2)
        }
        if(state.rating === '1STARABOVE'){
            return products.filter((product) => product.rating >= 1)
        }

        return products;
    }

    const filteredProducts = rating(sort(inStock(bestSeller(state.productLists))))
    
    const value = {
        state,
        dispatch,
        productLists: filteredProducts,
        initProductList
    }

    return (
        <FilterContent.Provider value={value}>
            {children}
        </FilterContent.Provider>
    )
};

export const useFilter = () => useContext(FilterContent);