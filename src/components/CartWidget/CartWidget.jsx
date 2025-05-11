import { CiShoppingCart } from "react-icons/ci";
function CartWidget() {
    return (
    <div className="cart">
        <CiShoppingCart size="30px"/>
        <span className="badge">4</span>
    </div>
    )
}

export default CartWidget