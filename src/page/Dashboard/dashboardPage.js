import { useEffect, useState } from "react";
import DashboardCard from "./components/dashboardCard";
import DashboardEmpty from "./components/emptydashB";
import { getuserOrder } from "../../services/dataService";
import Usetitle from "../../hooks/useTitle";
import { toast } from "react-toastify";

const DashBoardPage = () => {
    Usetitle('Dashboard')

    const [orders, setorders] = useState([]);
    // const token = JSON.parse(sessionStorage.getItem('token'));
    // const cbid = JSON.parse(sessionStorage.getItem('cbid'));

    useEffect(() => {
        async function fetchOrders() {
            try{
                // const response = await fetch(`http://localhost:8000/660/orders?userOrder.id=${cbid}`, {
                //     method: "GET",  
                //     headers: {'Content-type': 'application/json', Authorization: `Bearer ${token}`},
                // });
                // const data = await response.json();

                const data = await getuserOrder();
                setorders(data);
            }catch(error){
                toast.error(error.message, {closeButton: true, position:"bottom-center"});
            }
        }
        fetchOrders();
    }, [])
console.log(orders)

    return ( 
        <main>
            <section>
                <p className="text-2xl text-center font-semibold darK:text-slate-100  my-10 underline underline-">Dashboard</p>
            </section>

            <section>
                {orders.length && orders.map((order) => (
                    <DashboardCard key={order.id} order={order} /> 
                ))}
            </section>

            <section>
                {!orders.length && <DashboardEmpty/>}
            </section>
        </main>
     );
}
 
export default DashBoardPage;