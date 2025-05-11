import "./NavBar.css";
import logo from "../../assets/logo-img.png";
import CartWidget from "../CartWidget/CartWidget"

function NavBar(){
    return (
        <nav className="navbar">
            <article className="logo">
                <img src={logo} alt="coffee" className="logo-img"/>
                <p className="logo-p">Coffa</p>
            </article>
            <ul className="nav-links">
                <li>
                    <a href="#" className="links">Home</a>
                </li>
                <li>
                    <a href="#" className="links">Products</a>
                </li>
                <li>
                    <a href="#" className="links">Special Offers</a>
                </li>
                <li>
                    <a href="#" className="links">The Process</a>
                </li>
                <li>
                    <a href="#" className="links">About</a>
                </li>
            </ul>
            <article className="nav-right">
                <CartWidget/>
                <button className="btnLogin">Log in/Sign up</button>
            </article>
        </nav>
    )
}

export default NavBar