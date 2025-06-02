import Item from "../Item/Item";
const categories = {
    BLENDS: "Blends",
    FRENCHPRESS: "Coffee-Press",
    ACCESSORIES: "Accessories"
};
function ItemList({ items }) {
    return (
        <div>
            <article>
                <article className="container-info">
                    <h2 className="container-title">Explore the recent products</h2>
                    <p className="container-p">Our delectable drink options, including classic espresso choices, house especialties, coffee makers and accessories.</p>
                </article>
                <article className="container-prod">
                    {items.map(item => (
                        <Item
                            image={item.image}
                            category={item.category}
                            categoryId={item.categoryId}
                            key={item.id}
                            id={item.id}
                            nombre={item.nombre}
                            precio={item.precio}
                        />
                    ))}
                </article>
            </article>
        </div>
    );
}
export default ItemList;