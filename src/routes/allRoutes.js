import { Route, Routes } from "react-router-dom";
import HomePage from "../page/home/homePage";
import ProductLists from "../page/products/productList";
import ProductDetail from "../page/productDetail";
import Login from "../page/login";
import Register from "../page/register";
import CartPage from "../page/Cart/cartPage";
import ProtectedRoute from "../components/protectedRoutes";

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
                
            </Routes>
      
        </>
     );
}
 
export default AllRoutes;