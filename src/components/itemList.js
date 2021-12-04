import item from "../ItemListContainer/ItemListContainer"

const itemList = ({productos}) => {
    return (
        <ul className= "lista">
            {productos.map (productos =><Item key={productos.id}productos={productos}/>)}
        </ul>
    )
}

export default itemList