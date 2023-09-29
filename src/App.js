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
import { CartProvider } from './Context/CartContext';
import Carrito from './componentes/Carrito/Carrito';



function App() {

  return (

  <div className="App">
   <CartProvider>
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
    <Route path='/Carrito' element={<Carrito/>} />
    <Route path='/*' element="NOT FOUND 404"/>

    </Routes>
    </body>
    <Footer />
       </BrowserRouter>
       </CartProvider>
    </div>
    
   
);
}

export default App;
