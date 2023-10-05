import React, { useContext } from "react"
import { CartContex } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import "../Carrito/Carrito.css"




const Carrito = () =>{
    const {carrito, limpiarCarrito, totalQuantity , removerItems, totalEnCarrito} = useContext(CartContex)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1> No hay productos en el carrito</h1>
                <Link to="/"> Productos </Link>
            </div>
        )
    }

    return (
       <div>
        <h1>Carrito</h1>
        {
            carrito.map((prod)=> (
               
                <div className="Carrito" key={prod.id}>
                    <h2 className="prod-carrito titulo">{prod.nombre}</h2>
                    <img className="img-carrito" src={`/img/${prod.img}`}alt={prod.nombre}/>
                    <p className="prod-carrito">Precio ${prod.precio}</p>
                    <p className="prod-carrito"> Canitdad: {prod.cantidad}</p>
                    <p className="prod-carrito">Total Producto $ {prod.precio*prod.cantidad}</p>      
                    <span className="prod-carrito remover" onClick={ ()=> {removerItems(prod.id)} }> ❌ </span>

                   
                </div>
            ))
        }
        <h3>Total: ${totalEnCarrito()}</h3>
       
    <button onClick={()=> limpiarCarrito()}>Limpiar  Carrito</button>
    <Link to="/checkout"> Finalizar Compra </Link>
       </div>
    )}

export default Carrito