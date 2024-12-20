import { useRef } from "react";
import {Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/authService";
import Usetitle from "../hooks/useTitle";

const Login = () => {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    Usetitle('login');
   
    async function handleLogin(event) {
        event.preventDefault();
        try{
                const authDetails = {
                    email: email.current.value,
                    password: password.current.value
                };
            
                //copied to authService.js
            //     const postRequest = {  
            //         method: "POST",
            //         headers: {"content-type": "application/json"},
            //         body: JSON.stringify(authDetails)
            //   }
            
            //     const resp = await fetch('http://localhost:8000/login', postRequest);
            //     const data = await resp.json();
            //     data.accessToken ? navigate('/products') : toast.error(data);

            //     if(data.accessToken){
            //         sessionStorage.setItem("token", JSON.stringify(data.accessToken));
            //         sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
            //     }

            const data = await login(authDetails);
            data.accessToken ? navigate('/products') : toast.error(data);
        }catch(error){
            toast.error(error.message, {closeButton: true, position:"bottom-center"})
        }
    };

    async function handleLoginAsguest() {
        try{
            email.current.value = "mary@example.com";
            password.current.value = 1234567;
            const data = await login({email: email.current.value, password: password.current.value});
            data.accessToken ? navigate('/products') : toast.error(data.message);
        }catch(error){
            toast.error(error.message, {closeButton: true, position:"bottom-center"})
        }
        
    }


    return ( 
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>
            </section>        
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input ref={email}  type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="funmi@example.com" required autoComplete="off" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input  ref={password}  type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
                </form>
                <button onClick={handleLoginAsguest} className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button>
                
                <br />
                
                <Link to="/register"><button className="mt-3 mr-4 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">not a user yet? register</button></Link>
         </main>
     );
}
 
export default Login;