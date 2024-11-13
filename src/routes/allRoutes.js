import { Route, Routes } from "react-router-dom";
import HomePage from "../page/home/homePage";
import ProductLists from "../page/products/productList";
import ProductDetail from "../page/productDetail";
import Login from "../page/login";
import Register from "../page/register";
import CartPage from "../page/Cart/cartPage";
import ProtectedRoute from "./protectedRoute";
import OrderPage from "../page/Order/orderPage";
import DashBoardPage from "../page/Dashboard/dashboardPage";
import PageNotFound from "../page/PageNotFound";


const AllRoutes = () => {
    return ( 
        <>
            <Routes>
                <Route path="/"  element={<HomePage/>}/>
                <Route path="/products"  element={<ProductLists/>}/>
                <Route path="/products/:id"  element={<ProductDetail/>}/>
                <Route path="login"  element={<Login/>}/>
                <Route path="register"  element={<Register/>}/>

                <Route path="cart"  element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
                <Route path="order"  element={<ProtectedRoute><OrderPage/></ProtectedRoute>}/>
                <Route path="dashboard"  element={<ProtectedRoute><DashBoardPage/></ProtectedRoute>}/>
                
                <Route path="*"  element={<PageNotFound/>}/>

            </Routes>
      
        </>
     );
}
 
export default AllRoutes;