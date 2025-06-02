import toastedBean from "../../assets/img404.png";
import { Link,Outlet } from "react-router-dom";
import "./Error.css";
function Error(){
    return(
        <div className="containerError">
            <img src={toastedBean} alt="burnt coffee bean" className="imgError"/>
            <div className="containerErrorDetail">
                <h2 className="h2Error">Oops! This bean got over-roasted...</h2>
                <p className="pError">The page you’re looking for doesn’t exist, but don’t worry — freshly roasted coffee is just a click away.</p>
                <Link to="/" className="links">Back to the shop</Link>
                <Link to="/products/blends" className="links">Explore our coffees</Link>
            </div>
            <Outlet />
        </div>
    )
}
export default Error