import { CiShoppingCart } from "react-icons/ci";
import { useContext } from 'react';
import { CartNumber } from '../../App';
function CartWidget() {
    const { cNumber, addToCartNumber } = useContext(CartNumber);
    return (
    <div className="cart">
        <CiShoppingCart size="30px"/>
        <span className="badge">{cNumber}</span>
    </div>
    )
}

export default CartWidget