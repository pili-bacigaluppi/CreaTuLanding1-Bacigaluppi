import ItemDetail from "../ItemDetail/ItemDetail";
import Error from "../Error/Error";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"

function ItemDetailContainer({items}) {
    const { id } = useParams();
    const [prod, setProd] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (items.length === 0) return;
        const foundProduct = items.find((p) => p.id === id);
        if (foundProduct) {
            setProd(foundProduct);
        }
        setLoading(false);
    }, [id, items]);
    if (loading) return <div className="loadingContainer"><h2 className="loadingP">Loading product...</h2></div>;
    if (!prod) return <Error/>;
    return <ItemDetail product={prod} />;
}
export default ItemDetailContainer;
