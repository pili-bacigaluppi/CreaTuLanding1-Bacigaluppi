import ItemDetail from "../ItemDetail/ItemDetail";
import Error from "../Error/Error";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/Product";
import "./ItemDetailContainer.css"

function ItemDetailContainer() {
    const { id } = useParams();
    const [prod, setProd] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProduct = new Promise((resolve, reject) => {
            setTimeout(() => {
                const foundProduct = products.find((p) => p.id === parseInt(id));
                if (foundProduct) {
                    resolve(foundProduct);
                } else {
                    reject("Product Not Found");
                }
            }, 1500);});
        fetchProduct
            .then((data) => {
                setProd(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);});
    }, [id]);
    if (loading) return <div className="loadingContainer"><h2 className="loadingP">Loading product...</h2></div>;
    if (!prod) return <Error/>;
    return <ItemDetail product={prod} />;
}
export default ItemDetailContainer;
