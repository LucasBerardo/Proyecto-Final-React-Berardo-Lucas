import React, { useContext, useState } from "react"
import ItemsCount from "../ItemCount/ItemCount"
import "./ItemsDetail.css"
import { Link } from "react-router-dom"
import { CartContex } from "../../Context/CartContext"

const ItemsDetail = ({id,nombre,img,precio,stock,categoria,descripcion}) =>{

    const [cantidadAgregada, setcantidadAgregada] = useState(0);

    const {agregarItems} = useContext(CartContex)
    const agregarProducto = (quantity ) =>{
        setcantidadAgregada(quantity)
        const items = {
            id,nombre, precio, img, descripcion
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
                <p className="dellate-articulo"> Precio: ${ precio } </p>
                <p className="dellate-articulo"> Stock Disponible: { stock } </p>
                <p className="dellate-articulo"> Categoria: { categoria } </p> 
                <p className="dellate-articulo">Descripcion: {descripcion}</p>
            </section>
                {
                    cantidadAgregada > 0 ? (
                        <Link to ='/Carrito' className="terminar-compra"> Finalizar Compra </Link>
                    ) : (
            <ItemsCount initial={1} stock={stock} onAdd={agregarProducto} />
            )
        }
        </card>
    )
}

    export default ItemsDetail