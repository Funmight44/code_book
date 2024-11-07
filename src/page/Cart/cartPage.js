import { useCart } from "../../content/cartContext";
import CartList from "./components/cartList";
import CartEmpty from "./components/emptyCart";

const CartPage = () => {
    const {cartList} = useCart();
    
    return ( 
        <main>
            {cartList.length ?  <CartList/> : <CartEmpty/>}
        </main>
     ); 
}
 
export default CartPage;