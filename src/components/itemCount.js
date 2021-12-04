import { useState } from "react"

const itemCount =({stock, initial, onAdd}) => {
    
    stock = 5
    initial= 1
    const [contador = initial, setContador] = useState(1);


const aumentarCont = () => {
if (contador < stock) {
    setContador(contador+1)
} else {
    alert("No hay suficiente stock")
}
    
}

const restarCont = () => {

    if (contador > initial) {
        setContador(contador-1);
    }

}

const agregarCarrito = () => {
    if (contador < stock) {
        setContador (contador + 1);
    }
}

}

const contadorItem = () => {
    return (
        <span>
            <h1>{contador}</h1>
            <button onClick={aumentarCont}>Aumentar</button>
            <button onClick={restarCont}>Restar</button>
            <button onClick={agregarCarrito}>Al carrito</button>
        </span>
    )
}

export default itemCount