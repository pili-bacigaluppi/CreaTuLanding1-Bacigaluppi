import { Link,Outlet } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo-img.png';
import './NavBar.css';

function NavBar() {
    return (
        <>
        <nav className="navbar">
            <article className="logo">
                <img src={logo} alt="coffee" className="logo-img" />
                <p className="logo-p">Coffa</p>
            </article>
            <ul className="nav-links">
                <li><Link to="/" className="links">Home</Link></li>
                <li><Link to="/category/blends" className="links">Coffee Beans</Link></li>
                <li><Link to="/category/press" className="links">French Press</Link></li>
                <li><Link to="/category/accessories" className="links">Accessories</Link></li>
            </ul>
            <article className="nav-right">
                <Link to="/cart" className='cartW'><CartWidget /></Link>
                <button className="btnLogin">Log in/Sign up</button>
            </article>
        </nav>
        </>
    );
}

export default NavBar;
