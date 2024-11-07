export function FilterReducer(state, action){
    const {type, payload} = action;



    switch(type){
        case "PRODUCT_LISTS":
            return {productLists: payload.products}

        
         case "BEST_SELLER_ONLY":
            return {...state, bestSellerOnly: payload.bestSellerOnly}
    

        case "IN_STOCK_ONLY":
            return  {...state, inStockOnly: payload.inStockOnly}

       
        case "SORT_BY":
            return {...state, sortby: payload.sortby}

        case "RATINGS":
            return  {...state, rating: payload.rating}

        case "CLEAR_FILTER":
            return {...state, 
                productLists: [],
                inStockOnly: false,
                bestSellerOnly: false,
                sortby: null,
                rating: null
            }
        
        default: 
        throw new Error('no product found')
        
    }
}