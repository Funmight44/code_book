import { useCart } from "../../content/cartContext";
import Usetitle from "../../hooks/useTitle";
import CartList from "./components/cartList";
import CartEmpty from "./components/emptyCart";

const CartPage = () => {
    const {cartList} = useCart();
    
    Usetitle(`Cart (${cartList.length})`)

    return ( 
        <main>
            {cartList.length ?  <CartList/> : <CartEmpty/>}
        </main>
     ); 
}
 
export default CartPage;