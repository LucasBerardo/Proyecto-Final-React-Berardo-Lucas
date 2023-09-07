import './App.css';
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer'
import NavBar from './componentes/NavBar/NavBar';
import Saludo from './componentes/Saludo/Saludo.js';
import ItemCount from './componentes/ItemCount/ItemCount';
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (
<BrowserRouter>
<NavBar />
  <div className="App">
    
      
      <Saludo greeting={('BIENVENIDOS A NUTS')}/>

      <ItemsListContainer />

      <ItemCount  initial={1} stock={10} onAdd={(quantity)=> console.log ('cantidad agregada', quantity)}/>
     
    </div>
    </BrowserRouter>
   
);
}

export default App;
