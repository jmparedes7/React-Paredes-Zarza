import itemCount from "./itemCount"

const ItemListContainer = (prop) => {
    return (
        <div>
            {prop.greeting}
            {itemCount}
        </div>
    )
}

export default ItemListContainer