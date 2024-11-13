import { useLocation } from "react-router-dom";
import OrderSuccess from "./components/orderSuccess";
import OrderFail from "./components/orderFail";

const OrderPage = () => {
    const {state} = useLocation();
    // const status = location.state?.status ?? false; // Default to false if status is null or undefined
    // const data = location.state?.data ?? {}; // Default to empty object if data is missing


    return ( 
        <main>
            {state.status ? <OrderSuccess data={state.data}/> : <OrderFail/>}
        </main>
     );
}
 
export default OrderPage;