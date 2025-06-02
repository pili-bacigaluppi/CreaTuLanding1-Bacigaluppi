import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo-img.png';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <article className="logo">
                <img src={logo} alt="coffee" className="logo-img" />
                <p className="logo-p">Coffa</p>
            </article>
            <ul className="nav-links">
                <li><Link to="/products" className="links">Home</Link></li>
                <li><Link to="/products/blends" className="links">Coffee Beans</Link></li>
                <li><Link to="/products/press" className="links">French Press</Link></li>
                <li><Link to="/products/accessories" className="links">Accessories</Link></li>
            </ul>
            <article className="nav-right">
                <CartWidget />
                <button className="btnLogin">Log in/Sign up</button>
            </article>
        </nav>
    );
}

export default NavBar;
