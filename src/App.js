import './App.css';
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';
import NavBar from './componentes/NavBar/NavBar';
import Saludo from './componentes/Saludo/Saludo.js';
import Contacto from './componentes/Pages/Contacto/Contacto';
import Inicio from './componentes/Pages/Inicio/Inicio'
import ItemsDetailContainer from './componentes/ItemsDetailContainer/ItemsDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (


  <div className="App">
    <BrowserRouter>

    <NavBar />
    
    <Routes>
    
    <Route path='/' element={<Saludo greeting={('NUTS - SNACK SALUDABLE')}/>}/>
    <Route path='/' element={<Inicio/>}/>
    <Route path='/Productos' element={<ItemsListContainer/>}/>
    <Route path='/items/:id' element={<ItemsDetailContainer/>} />
    <Route path='/Contacto' element={<Contacto/>}  />
    <Route path='/Categorias/:categoria' element={<ItemsListContainer/>} />


    </Routes>
      
       </BrowserRouter>
    </div>
    
   
);
}

export default App;
