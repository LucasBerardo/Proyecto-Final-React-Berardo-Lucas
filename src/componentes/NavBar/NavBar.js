import CartWidget from "../CartWidget/CartWidget";
import './styles.css';

const NavBar = () => {

    return(
        
        <nav className='nav-container'>

<div className="btn-group" role="group" aria-label="Default button group">
  <button type="button" className="rutas">Inicio</button>
  <button type="button" className="rutas">Categorias</button>
  <button type="button" className="rutas">Sobre Nosotros</button>
  <button type="button" className="rutas">Contacto</button>
</div>

           
           <div className="cart-widget-container">
                <CartWidget />
           </div>

           </nav>
       
       
    )
}

export default NavBar