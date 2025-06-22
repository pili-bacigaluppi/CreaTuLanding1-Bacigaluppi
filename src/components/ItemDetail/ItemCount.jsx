import React, { useState, useContext } from 'react';
import "./ItemDetail.css";
import { FaCartShopping } from "react-icons/fa6";
import { CartNumber } from '../../App';

function ItemCount() {
    const [cartCount, setCartCount] = useState(1);
    const { addToCartNumber } = useContext(CartNumber);
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
        <button className='btnAddCart' onClick={() => addToCartNumber(cartCount)}><FaCartShopping />Add to cart</button>
        </div>
    );
}
export default ItemCount;
