import './App.css';
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';
import NavBar from './componentes/NavBar/NavBar';
import Saludo from './componentes/Saludo/Saludo.js';
import Contacto from './componentes/Pages/Contacto/Contacto';
import Inicio from './componentes/Pages/Inicio/Inicio';
import ItemsDetailContainer from './componentes/ItemsDetailContainer/ItemsDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './componentes/Pages/Productos/Productos';
import SobreNosotros from './componentes/Pages/Sobre Nosotros/SobreNosotros';
import Footer from './componentes/Footer/Footer';
import Loader from './componentes/Loader/Loader';


function App() {
  return (


  <div className="App">
    <BrowserRouter>

   <NavBar />
<body className='body'>
    <Routes> 
   
    <Route path='/' element={<Saludo greeting={('NUTS - SNACK SALUDABLE')}/>}/>
    <Route path='/' element={<Inicio/>}/>
    <Route path='/Productos' element={<Productos/>}/>
    <Route path='/items/:id' element={<ItemsDetailContainer/>} />
    <Route path='/Contacto' element={<Contacto/>}  />
    <Route path='/SobreNosotros' element={<SobreNosotros/>}  />
    <Route path='/Categorias/:categoria' element={<ItemsListContainer/>} />
   

    </Routes>
    </body>
    <Footer />
  
       </BrowserRouter>
    </div>
    
   
);
}

export default App;
