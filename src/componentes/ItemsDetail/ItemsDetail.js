import React, { useContext, useState } from "react"
import ItemsCount from "../ItemCount/ItemCount"
import "./ItemsDetail.css"
import { Link } from "react-router-dom"
import { CartContex } from "../../Context/CartContext"

const ItemsDetail = ({id,nombre,img,precio,stock,categoria}) =>{

    const [cantidadAgregada, setcantidadAgregada] = useState(0);

    const {agregarItems} = useContext(CartContex)
    const agregarProducto = (quantity ) =>{
        setcantidadAgregada(quantity)
        const items = {
            id,nombre, precio, img
        }
        agregarItems( items, quantity)
    }
    
    return(
        <card className="card">
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img className="img-prod"src={`/img/${img}`} alt={nombre}/>
            </picture>
            <section>
                <p>
                    Precio: ${precio}
                </p>
                <p>
                    Stock Disponible: {stock}
                </p>
                <p>
                   Categoria: {categoria}
                </p>
            </section>
                {
                    cantidadAgregada > 0 ? (
                        <Link to ='/Carrito' className="terminar-compra"> Terminar Compra </Link>
                    ) : (
        
            <ItemsCount initial={1} stock={stock} onAdd={agregarProducto} />
            )
        }
        </card>
    )
}

    export default ItemsDetail