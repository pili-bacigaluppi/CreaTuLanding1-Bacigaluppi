import "./Footer.css";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Footer(){
    return(
        <footer>
            <article className="footer-info">
                <div>
                    <h4 className="footer-h4">Privacy</h4>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                    <p>Cookies</p>
                </div>
                <div>
                    <h4 className="footer-h4">Services</h4>
                    <p>Shop</p>
                    <p>Order ahead</p>
                    <p>Menu</p>
                </div>
                <div>
                    <h4 className="footer-h4">About Us</h4>
                    <p>Find a Location</p>
                    <p>About us</p>
                    <p>Our Story</p>
                </div>
                <div>
                    <h4 className="footer-h4">Information</h4>
                    <p>Plans and Pricing</p>
                    <p>Jobs</p>
                    <p>Sell Your Product</p>
                </div>
                <div>
                    <h4 className="footer-h4">Social Media</h4>
                    <div className="socialMedia">
                        <IoLogoTwitter />
                        <IoLogoInstagram /> 
                        <FaFacebookF />
                        <FaYoutube />
                        <FaLinkedinIn />
                    </div>
                </div>
            </article>
        </footer>
    )
}
export default Footer