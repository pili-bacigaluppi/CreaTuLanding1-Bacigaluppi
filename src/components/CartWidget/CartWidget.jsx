import { CiShoppingCart } from "react-icons/ci";
import { useContext } from 'react';
import { CartItems } from '../../App';

function CartWidget() {
    const { cNumber, addToCartNumber } = useContext(CartItems);
    return (
    <div className="cart">
        <CiShoppingCart size="30px"/>
        <span className="badge">{cNumber}</span>
    </div>
    )
}

export default CartWidget