import Nav from "./Nav";
import Button from 'react-bootstrap/Button'
import CartWidget from "./CartWidget";

const Header = () => {
    return (
        <header>
            <h1>Nombre del comercio</h1>
            <Nav />
            <CartWidget />
            <Button variant= "primary">HOLA</Button>
        </header>
    )
}

export default Header