import productos from "./Productos"

//const stock = ({productos}) 

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

            <button>Comprar</button>

        </div>
    )
}

export default Item