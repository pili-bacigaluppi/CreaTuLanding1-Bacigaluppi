import "./CartCounter.css";
import { useContext, useState } from 'react';
import { CartItems } from "../../App";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function CartCounter() {
    const [showModal, setShowModal] = useState(false);
    const { cartItems,setCartItems,setCartTotal,setcNumber } = useContext(CartItems);
    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal += item.precio * item.quantity;
    });
    const envio = Math.round(subtotal * 0.15);
    const precioFinal = subtotal + envio;
    const endPurchase = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        setShowSuccess(false)
    };
    const [clientName, setClientName] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [clientNum, setClientNum] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const db = getFirestore();
    const orderData = {
        clientName,
        clientAddress,
        clientNum,
        clientEmail,
        items: cartItems,
        totalSum: precioFinal,
        date: new Date()
    };
    const clearCart = () => {
        setCartItems([]);
        setCartTotal(0);
        setcNumber(0);
    };
    const [orderId, setOrderId] = useState(null);
    const handleSubmit = (event) =>{
        event.preventDefault();
        addDoc(collection(db, "pedidos"), orderData)
        .then(({id})=>{
            setShowModal(false);
            setShowSuccess(true);
            setOrderId(id);
            clearCart()
        })
        .catch((error)=>{
            console.error("Error al guardar la orden: ", error)
        })
    }
    return (
        <>
            <section className="contadorPrecio">
                <h3>Resumen de Compra</h3>
                <article>
                    <div className="contadorXCada">
                        <p>Producto</p>
                        <p>${subtotal}</p>
                    </div>
                    <div className="contadorXCada">
                        <p>Envío (15%)</p>
                        <p>${envio}</p>
                    </div>
                    <div className="contadorXCada">
                        <p><span>Total</span></p>
                        <p><span>${precioFinal}</span></p>
                    </div>
                </article>
                <button className="endCompra" onClick={endPurchase}>Continuar Compra</button>
            </section>
            {showModal && (
                <div onClick={closeModal} className="container">
                    <div onClick={(e) => e.stopPropagation()} className="bg">
                        <span onClick={closeModal} className="close">&times;</span>
                        <h2 className="h3-form">Complete con sus datos personales:</h2>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="input-div">
                                <label className="imput-p">Nombre y Apellido:</label>
                                <input
                                    type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} className="input" required/>
                            </div>
                            <div className="input-div">
                                <label className="imput-p">Dirección de la Entrega:</label>
                                <input type="text" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} className="input" required/>
                            </div>
                            <div className="input-div">
                                <label className="imput-p">Número Celular:</label>
                                <input type="tel" value={clientNum} onChange={(e) => setClientNum(e.target.value)} className="input" required/>
                            </div>
                            <div className="input-div">
                                <label className="imput-p">Correo Electrónico:</label>
                                <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} className="input" required/>
                            </div>
                            <button type="submit" className="btnSubmit">Pagar</button>
                        </form>
                    </div>
                </div>
            )}
            {showSuccess && (
                <div className="modal-success">
                    <div className="bg-success">
                        <span onClick={closeModal} className="close">&times;</span>
                        <span className="tick-icon">✔</span>
                        <p className="p-success">¡Compra realizada con éxito!</p>
                        <p>El id de su compra es: <br/> <span className="spanId">{orderId}</span></p>
                    </div>
                </div> 
            )}
        </>
    );
}

export default CartCounter;
