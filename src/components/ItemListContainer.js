import itemCount from "./itemCount"
import itemList from "./itemList"

const ItemListContainer = (prop) => {
    return (
        <div>
            {prop.greeting}
            {itemList}
            {itemCount}
        </div>
    )
}

export default ItemListContainer