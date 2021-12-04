import itemList from "./itemList"

const Item = ({productos}) => {
    return (
        <div className = "card">
            <div className = "conteiner">
                <h2 className = "itemHeader">
                    {productos.nombre}
                </h2>
             </div>

            <img src = {productos.imagen} className="ItemImg"/>

            <p className= "info">
                Precio: {productos.precio}
            </p>

        </div>
    )
}

export default Item