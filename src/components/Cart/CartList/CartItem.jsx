import "./CartList.css";
import { useContext } from 'react';
import { CartItems } from "../../../App";
import { BsFillTrash2Fill } from "react-icons/bs";

function CartItem() {
    const { cartItems, setCartItems, setcNumber } = useContext(CartItems);
    function deleteItem(deleteIndex) {
        const itemToRemove = cartItems[deleteIndex];
        setCartItems(prevItems => prevItems.filter((_, index) => index !== deleteIndex));
        setcNumber(prev => prev - itemToRemove.quantity);
    }
    return (
        <>
            {cartItems.map((item, index) => (
                <div key={index} className="card-carrito">
                    <img src={item.imagen} className="product-img" />
                    <article className="left-cart-item">
                        <h3 className="h3Cart">{item.nombre}</h3>
                        <div className="extra-info">
                            <p className="pCart">Precio: ${item.precio}</p>
                            <p className="pCart">Cantidad: {item.quantity}</p>
                        </div>
                    </article>
                    <article className="right-cart-item">
                        <p className="precio-carrito">${item.precio * item.quantity}</p>
                        <button className="delete-cart-item" onClick={() => deleteItem(index)}>
                            <BsFillTrash2Fill />
                        </button>
                    </article>
                </div>
            ))}
        </>
    );
}
export default CartItem;
