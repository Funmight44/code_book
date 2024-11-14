import { Link } from "react-router-dom";
import facebook from '../images/SVG/facebook.svg'
import instagram from '../images/SVG/instagram.svg'
import linkedin from '../images/SVG/linkedin.svg'




const Footer = () => {
    return ( 
        <footer>
            <div className=" bg-white shadow flex items-center justify-between p-4 bt-gray dark:bg-gray-800">
                <div>
                    <span>copywrite @funmight 2024</span>
                </div>

                <div className="flex items-center">
                    <Link to=""><img src={facebook} alt="facebook" className="color-blue mr-4"/></Link>
                    <Link to=""><img src={linkedin} alt="facebook"  className="color-blue  mr-4"/></Link>
                    <Link to=""><img src={instagram} alt="facebook" className="color-red  mr-4"/></Link> 
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;