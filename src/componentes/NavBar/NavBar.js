import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import LogoTipo from "../Logo/Logo"


const NavBar = () => {

    return(
        
<nav className='nav-container'>

  <div className="Logo-Nuts">
   <LogoTipo />
  </div>


<div className="rutas" >
 
 <a href="#" className="rutas ">Inicio</a>
 <a href="#" class="rutas dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Categorias
  </a>
  <ul class="dropdown-menu">
    <li> <a className="categorias" href="Frutos Secos"> Frutos Secos</a></li>
    <li> <a className="categorias" href="Frutos Secos"> Condimentos</a></li>
    <li> <a className="categorias" href="Frutos Secos"> Frutas Abrillantadas</a></li>
  </ul>
 <a href="#"  className="rutas ">Sobre Nosotros</a>
  
  <a href="#" className="rutas">Contacto</a>
 
</div>

<div>
  <CartWidget />
   </div>
 </nav>
       
       
    )
}

export default NavBar