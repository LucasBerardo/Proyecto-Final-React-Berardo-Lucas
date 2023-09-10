import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import LogoTipo from "../Logo/Logo"
import { Link } from "react-router-dom";


const NavBar = () => {

    return(
        
<nav className='nav-container'>

  <div className="Logo-Nuts">
   <LogoTipo />
  </div>


<div className="rutas" >
 
<Link to="/" className="rutas">Inicio</Link>
 <Link to="/Productos" className="rutas ">Productos</Link>
 <Link to="/Categorias" class="rutas dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Categorias
  </Link>
  <ul class="dropdown-menu">
    <li> <Link className="categorias" to="/Categorias/Frutos Secos"> Frutos Secos</Link></li>
    <li> <Link className="categorias" to="/Categorias/Condimentos"> Condimentos</Link></li>
    <li> <Link className="categorias" to="/Categorias/Frutas Abrillantadas"> Frutas Abrillantadas</Link></li>
  </ul> 

 <Link to="/SobreNosotros"  className="rutas ">Sobre Nosotros</Link>
  
  <Link to="/Contacto" className="rutas">Contacto</Link>

</div>

<div>
  <CartWidget />
   </div>
 </nav>
       
       
    )
}

export default NavBar