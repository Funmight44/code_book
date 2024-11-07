
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({Children}) => {
    const token = JSON.parse(sessionStorage.getItem('token'))
    return token ? Children : <Navigate to='/login'/>;
}
 
export default ProtectedRoute;