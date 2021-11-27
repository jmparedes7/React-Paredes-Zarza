import Nav from "./Nav";
import Button from 'react-bootstrap/Button'

const Header = () => {
    return (
        <header>
            <h1>Nombre del comercio</h1>
            <Nav />
            <Button variant= "primary">HOLA</Button>
        </header>
    )
}

export default Header