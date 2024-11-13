import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Rating  from '../components/rating'
import Usetitle from "../hooks/useTitle";
import { useCart } from "../content/cartContext";
import { toast } from "react-toastify";



const ProductDetail = () => {
    const params = useParams();
    const [product, setProduct] = useState({});

    const {cartList, addToCart, removeFromCart} = useCart();
    const [inCart, setInCart] = useState(false);


    Usetitle(`${product.name}`)

    useEffect(() => {
        async function fetchProduct() {
            try{
                const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${params.id}`);
                if(!response.ok){
                    throw {message: response.statusText, status: response.status}  //eslint-disable-line
                };
                const data = await response.json();
                setProduct(data);
            }catch(error){
                 toast.error(error.message, {closeButton: true, position:"bottom-center"})
            }
        }
        fetchProduct();
    }, [params.id]);


    useEffect(() => {
        const productInCart = cartList.find((item) => item.id === product.id);
        productInCart ? setInCart(true) : setInCart(false);
    }, [cartList, product.id])




    return ( 
        <main>
            <section>
            <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
            <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}.</p>
            <div className="flex flex-wrap justify-around">
                <div className="max-w-xl my-3">
                  <img className="rounded" src={product.poster} alt="name" />
                </div>
                <div className="max-w-xl my-3">
                <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                    <span className="mr-1">$</span>
                    <span className="">{product.price}</span>
                </p>
                <p className="my-3"> 
                    <span>
                        <Rating rating={product.rating}/>
                    </span>
                </p>
                <p className="my-4 select-none">
                    {product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span> }    
                    {product.in_stock &&  <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>}
                    {!product.in_stock &&  <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>}
                    <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
                </p>    
                <p className="my-3">
                   {inCart ?( <button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button>)
                    : (<button onClick={() => addToCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : 'cursor-not-allowed'}`} disabled={ product.in_stock ? "" : "disabled" }    >Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>)}
               </p>
                <p className="text-lg text-gray-900 dark:text-slate-200">
                    {product.long_description}
                </p>
                </div>
            </div>
            </section>
        </main> 
     );
}
 
export default ProductDetail;