import "./ItemListContainer.css"

function ItemListContainer({greeting}){
    return(
        <article className="greeting">
            <h1 className="greeting-h1">{greeting}</h1>
        </article>
    )
}

export default ItemListContainer