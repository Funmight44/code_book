

export function CartReducer(state, action){
    const {type, payload} = action;

    switch(type){
        case "ADD_TO_CART":
            return {...state, cartList: payload.products, total: payload.total}

        case "REMOVE_FROM_CART":
            return  {...state, cartList: payload.products,  total: payload.total}

        case "UPDATE_CART":
            return


        case "CLEAR_CART":
            return  {...state, cartList: payload.products, total: payload.total}

        default: 
        throw new Error("case not found")
    }
}