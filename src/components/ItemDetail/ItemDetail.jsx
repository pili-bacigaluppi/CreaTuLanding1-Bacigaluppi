import ItemCount from "./ItemCount";
import "./ItemDetail.css";
function ItemDetail({ product }) {
    return (
        <div className="detailContainer">
            <article className="detail">
                <img className="prodImg" src={product.image} alt={product.descripcion} />
                <div className="prodDetail">
                    <div>
                        <h2 className="detailH2">{product.nombre}</h2>
                        <h3 className="detailPrice">${product.precio}</h3>
                        <h5>Stock Disponible: {product.stock}</h5>
                    </div>
                    <div>
                        <hr className="line"/>
                        <p className="detailP">{product.descripcion}</p>
                    </div>
                    <ItemCount />
                </div>
            </article>
        </div>
    );
}

export default ItemDetail;