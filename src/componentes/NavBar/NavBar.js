import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {

    return(
        
<nav className='nav-container'>

  <div>
    LOGO
  </div>


<div className="btn-group" role="group" aria-label="Default button group">
  <button type="button" className="rutas ">Inicio</button>
  <button class="rutas dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Categorias
  </button>
  <ul class="dropdown-menu">
    <li> <a className="categorias" href="Frutos Secos"> Frutos Secos</a></li>
    <li> <a className="categorias" href="Frutos Secos"> Condimentos</a></li>
    <li> <a className="categorias" href="Frutos Secos"> Frutas Abrillantadas</a></li>
  </ul>
  <button type="button" className="rutas ">Sobre Nosotros</button>
  
  <button type="button" className="rutas">Contacto</button>
  
</div>

<div>
  <CartWidget />
   </div>
 </nav>
       
       
    )
}

export default NavBar