import Header from "./components/Header";
import Nav from "./components/Nav"
import Main from "./Main"
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
    <Header />

    <ItemListContainer greeting = "Bienvenidos!!" />

    <Main />
    
    <Nav />
    </>
  )
}

export default App;