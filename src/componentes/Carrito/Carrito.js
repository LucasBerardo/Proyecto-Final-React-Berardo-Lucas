import React, { useContext } from "react"
import { CartContex } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import "../Carrito/Carrito.css"
import Swal from "sweetalert2"

const Carrito = () =>{
    const mostrarMensaje = () =>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Estas seguro/a de eliminar todos productos?',
            icon: 'info',
            html:
              'Se eliminaran todos los productos',
            
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              'Si',
            cancelButtonText:
              'No',
          })
          .then((result) => {
            if (result.isConfirmed) {
             limpiarCarrito()
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                "Sus productos no fueron eliminados"
              )
            }
          })

    }
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
                    <p className="prod-carrito">Precio Unitario ${prod.precio}</p>
                    <p className="prod-carrito"> Canitdad: {prod.cantidad}</p>
                    <p className="prod-carrito">Total Producto $ {prod.precio*prod.cantidad}</p>      
                    <span className="prod-carrito remover" onClick={ ()=>  {removerItems(prod.id)} }> <img className='icon-delate' src={`./img/delate.svg`} alt='delate' /> </span>
                </div>
            ))
        }
        {
            carrito <= 0 ? (<> USTED NO TIENE PRODUCTOS EN EL CARRITO
            <Link to ='/Productos' className="button-checkout"> Seguir Comprando </Link></>) : 
            (<> <h3>Total: ${totalEnCarrito()}</h3>
            <div className="container-button-chekout">
         <Link to ='/Productos' className="button-checkout"> Seguir Comprando </Link>
         <Link to="/checkout" className="button-checkout"> Finalizar Compra </Link>
          <button className="button-checkout" onClick={()=> mostrarMensaje()}>Limpiar  Carrito</button>
         </div>
         </>
         )
        }
       </div>
    )}

export default Carrito