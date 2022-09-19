import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar' //no es necesario escribir el index.jsx, se ejecuta automáticamente.

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto='Soy un texto del proyecto' />
    </>
  );
}

export default App;
