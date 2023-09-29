
import './NavBar.css';
import '../CartWidget/CartWidget.css'
import LogoTipo from "../Logo/Logo"
import cart from "../CartWidget/assets/cart.svg"
import { Link } from "react-router-dom";
import { CartContex } from "../../Context/CartContext";
import { useContext } from "react";


const NavBar = () => {
  const { cantidadEnCarrito} = useContext(CartContex)
    return(
        
<nav className='nav-container'>

  <div className="Logo-Nuts">
   <LogoTipo />
  </div>


<div className="rutas" >
 
<Link className="rutas" to="/">Inicio</Link>
 <Link to="/Productos" className="rutas ">Productos</Link>
 <Link to="/Categorias" className="rutas dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
<Link to="/Carrito" className="rutas"> <img className='img-carrito' src={cart} alt='cart-widget' />
<span>  {cantidadEnCarrito()} </span> </Link>
 
   </div>
 </nav>
       
       
    )
}

export default NavBar