import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Hola desde el contenedor!" />
    </div>
  );
};

export default App;