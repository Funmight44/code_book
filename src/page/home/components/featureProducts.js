import { useEffect, useState } from "react";
import Cards from "../../../components/productcard";
import { getFeatureLists } from "../../../services/producService";
import { toast } from "react-toastify";

const FeactureProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try{
                    //copied to productService
                // const resp = await fetch("http://localhost:8000/featured_products");
                // const data = await resp.json();
                const data = await getFeatureLists();
                setProducts(data);
            }catch(error){
                toast.error(error.message, {closeButton: true, position:"bottom-center"})
            }
        }
        fetchProducts();
    } , [])





    return ( 
    <main>
        <section className="my-20">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
            <div className=" flex flex-wrap justify-start sm:justify-center lg:flex-row">
                {products.map((product) => (
                    <Cards key={product.id} product={product}/>
                ))}     
            </div>
        </section>
    </main>
     );
}
 
export default FeactureProducts;