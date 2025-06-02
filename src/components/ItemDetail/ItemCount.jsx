import React, { useState } from 'react';
import "./ItemDetail.css";
import { FaCartShopping } from "react-icons/fa6";
function App() {
    const [cartCount, setCartCount] = useState(0);
    const addToCart = () => {
        setCartCount(prevCount => prevCount + 1);
    };
    const removeFromCart = () => {
        setCartCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };
    return (
        <div className='countContainer'>
        <div className='itemCount'>
            <button className="buttonCount" onClick={removeFromCart}>-</button>
            {cartCount}
            <button className="buttonCount" onClick={addToCart}>+</button>
        </div>
        <button className='btnAddCart'><FaCartShopping />Add to cart</button>
        </div>
    );
}
export default App;
