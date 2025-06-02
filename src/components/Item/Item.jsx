import "./Item.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
function Item({nombre,precio,category,image,description,id,categoryId}) {
    return (
        <article className="prodCard">
            <img src={image} alt={description} className="prod-img"/>
            <div className="itemInfo">
                <p className="category-p">{category}</p>
                <h2>{nombre}</h2>
                <h4>${precio}</h4>
            </div>
                <Link to={`/products/${categoryId}/${id}`}>View more details <IoIosArrowRoundForward /></Link>
        </article>
    )
}
export default Item