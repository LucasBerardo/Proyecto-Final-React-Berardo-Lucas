import React, { useContext, useState } from "react";
import { CartContex } from "../../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, writeBatch, query, documentId, getDocs, where } from "firebase/firestore";
import { db } from "../../Firebase/config";


export const getOrders = async (userId) => {
    try { 
        const orders = collection (db, "Pedidos")
         const { docs } = await getDocs (query(orders, where("buyer.userId", "==", userId)))
         return docs.map((snapshot) => ({id: snapshot.id, ...snapshot.data() }))  
    } catch(e) {
        throw Error (e)
    } 
}
export const addOrders = async (items, comprar) =>{
    const batch = writeBatch(db)
    const outOfStock = []
    const ids = items.map( prod => prod.id)
    const pedidoRef = collection(db,"Pedidos");
    const { docs } = await getDocs (query (pedidoRef, where(documentId(), "in" , ids)))

    docs.forEach((snapshot)=>{
        const {stock, ...restOfData } = snapshot.data()

        const productsAddToCart = items.find(prod => prod.id === snapshot.id)
        const prodQuantity = productsAddToCart?.quantity

        if(stock >= prodQuantity){
            batch.update(snapshot.ref, {stock: stock - prodQuantity, ...restOfData})
        } else{
            outOfStock.push ({id: snapshot.id})
        }
    }) 

    if(outOfStock.length === 0){
        await batch.commit()

        const orderRef = collection(db, "Pedidos")
        const orderAdded = await addDoc(orderRef, {
            ...comprar
        })
        return orderAdded
    } else {
        return null
    } 
}

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

    const pedidoRef = collection(db,"Pedidos");

    addDoc (pedidoRef, pedido)
          .then((doc)=>{
            setPedidoId(doc.id)
            limpiarCarrito()

          })
        }

    if(pedidoId){
        return (
            <div>
                <h1>Muchas gracias por su compra</h1>
                <p>Su número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return(
        <div className="container">
        <h1 className="main-title">Contacto</h1>
            <div >
                <form className="formulario" onSubmit={handleSubmit(comprar)}>
                    <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                    <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                    <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                    <input type="password" placeholder="Ingresá tu contraseña" {...register("password")} />        
                    <button className="enviar" type="submit">Enviar</button>

                </form>
            </div>
            </div>
    )
    }

export default Checkout