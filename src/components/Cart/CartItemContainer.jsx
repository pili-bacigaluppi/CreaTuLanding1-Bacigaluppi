import "./CartItemContainer.css";
import CartCounter from "./CartCounter";
import CartList from "./CartList/CartList";

function CartItemContainer() {
    return (
        <>
        <section className="carritoProductos">
            <h2 className="h2Cart">Productos:</h2>
            <section className="sectionPagos">
                <CartList />
                <CartCounter />
            </section>
        </section>
        </>
    )
}
export default CartItemContainer