import "./CartList.css";
import CartItem from "./CartItem";
import { useContext } from 'react'
import { CartItems } from "../../../App";

function CartList() {
    const { cartItems } = useContext(CartItems);
    return (
        <>
            <section className="listProductsC">
                {cartItems.length === 0 ? <article className="empty-cart"><p className="p-emptycart">No tienes productos en tu carrito.</p></article> : <CartItem />}
            </section>
        </>
    )
}

export default CartList