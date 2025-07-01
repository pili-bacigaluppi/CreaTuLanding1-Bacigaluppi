import { useState, useContext, useEffect } from 'react';
import { CartItems } from '../../App'; 
import "./ItemDetail.css";

function ItemCount({ product }) {
    const [count, setCount] = useState(1);
    const { addToCart,addtoCartTotal } = useContext(CartItems);
    const [showAdded,setShowAdded]=useState(false);
    const handleAdd = () => {
    try {
        const itemAdd = {
            nombre: product.nombre,
            precio: product.precio,
            stock: product.stock,
            imagen: product.image,
        };
        addToCart(itemAdd, count);
        addtoCartTotal(product.precio * count);
        setShowAdded(true);
        setTimeout(() => setShowAdded(false), 1500);
    } catch (error) {
        console.error("ERROR:", error);
    }
    };
    return (
        <div className='countContainer'>
            <div className='itemCount'>
                <button className='buttonCount' onClick={() => count > 1 && setCount(count - 1)}>-</button>
                <span className='itemCount'>{count}</span>
                <button className='buttonCount' onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button className="btnAddCart" onClick={handleAdd} disabled={count > product.stock}>Add to Cart</button>
            {showAdded && <p className='render-p'>Added to Cart.</p>}
            {count > product.stock && <p className='render-p'>Insuficient stock.</p>}
        </div>
    );
}

export default ItemCount;
