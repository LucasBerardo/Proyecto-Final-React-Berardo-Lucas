import './App.css';
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';
import NavBar from './componentes/NavBar/NavBar';
import Saludo from './componentes/Saludo/Saludo.js';
// import ItemCount from './componentes/ItemCount/ItemCount';
import ItemsDetailContainer from './componentes/ItemsDetailContainer/ItemsDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (


  <div className="App">
    <BrowserRouter>
    <NavBar />
    
    <Routes>
    <Route path='/' element={<ItemsListContainer/>}  />
    <Route path='/' element={<Saludo greeting={('BIENVENIDOS A NUTS')}/>}/>
    <Route path='/items' element={<ItemsDetailContainer/>} />

    </Routes>
      
       </BrowserRouter>
    </div>
    
   
);
}

export default App;
