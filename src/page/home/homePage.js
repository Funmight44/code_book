import Usetitle from "../../hooks/useTitle";
import FAQ from "./components/FAQ";
import FeactureProducts from "./components/featureProducts";
import Hero from "./components/hero";
import Testimonial from "./components/testimon";

const HomePage = () => {
    Usetitle('Access the Latest computer Science ebook')
    return ( 
        <main>
            <Hero/>
            <FeactureProducts/>
            <Testimonial/>
            <FAQ/>
        </main>
     );
}
 
export default HomePage;