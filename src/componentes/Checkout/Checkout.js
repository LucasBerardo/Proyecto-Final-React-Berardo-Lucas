import React, { useContext, useState } from "react";
import { CartContex } from "../../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import "./Checkout.css"

const Checkout = () =>{
    
    const [pedidoId, setPedidoId] = useState("")

    const {carrito, limpiarCarrito,totalEnCarrito} = useContext(CartContex)

    const { register, handleSubmit } = useForm();

    const comprar = (data) =>{
        const pedido = {
cliente: data,
producto: carrito,
total:totalEnCarrito(),
    }

    const pedidoRef = collection(db, "Pedidos");

    addDoc (pedidoRef, pedido)
          .then((doc)=>{
            setPedidoId(doc.id)
            limpiarCarrito()
          })
          
        }

        if(pedidoId){
            return (
                <div className="finalizar-compra">
                    <h1 className="orden-agradecimiento">Muchas gracias por su compra!</h1>
                    <p className="orden-id">Su número de pedido es: "{pedidoId}"</p>
                </div>
            )
        }
    return(
        <div className="container">
        <h1 className="main-title">Contacto</h1>
                <form className="formulario" onSubmit={handleSubmit(comprar)}>
                    <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                    <input type="email" placeholder="Ingresá tu e-mail" {...register("email")}/>
                    <input type="email" placeholder="confirmar e-mail" {...register("email")}/>
                    <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                    <input type="password" placeholder="Ingresá tu contraseña" {...register("password")} />        
                    <button className="enviar" type="submit" >Enviar</button>
                </form>
            </div>
    )
    }
    
export default Checkout
   
    

