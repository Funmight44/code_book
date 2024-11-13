import {Link } from "react-router-dom";
import logo from '../images/logo.png';
// import search from '../images/SVG/search.svg'
// import user from '../images/SVG/SVG/user.svg'
// import cart from '../images/SVG/SVG/cart.svg'
// import setting from '../images/SVG/SVG/cog.svg'
import { useEffect, useState } from "react";
import Search from "./search";
import DropdownLogOut from "./dblogout";
import DdownLogin from "./ddLogin";
import { useCart } from "../content/cartContext";


const Header = () => {
    const [darkMode, setDark] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
    const [show, setShow] = useState(false);

    const [showDropdown, setShowDDown] = useState(false);
    const token = JSON.parse(sessionStorage.getItem("token"));

    const {cartList} = useCart();


    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));

        darkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")

    }, [darkMode]);



    return ( 
        <header>      
        <nav className="bg-white dark:bg-gray-900">
            <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                <a href="/" className="flex items-center">
                    <img src={logo} className="mr-3 h-10" alt="CodeBook Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                </a>

                <div className="flex items-center relative">
                    <span  onClick={() => setDark(!darkMode)}  className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                    <span  onClick={() => setShow(!show)}   className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                    <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                        <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                    </span>                    
                    </Link>
                    <span  onClick={() => setShowDDown(!showDropdown)}  className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                    {showDropdown && (token ? <DdownLogin  setShowDDown={setShowDDown}/> : <DropdownLogOut setShowDDown={setShowDDown}/>)}
                </div>
            </div>
        </nav>
       { show && <Search setShow={setShow}/>}   
    </header>    
     );
}
 
export default Header;