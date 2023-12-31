import React from "react"
import "./Items.css"
import { Link } from "react-router-dom"


const Items = ({id,nombre,img,precio}) =>{
    return(
       
        <div className="card">
            <header>
                <h2> { nombre } </h2>
            </header>
            <picture>
                <img className="img-prod"src={`/img/${img}`} alt={nombre}/>
            </picture>
            <p className="dellate-articulo">Precio: ${precio}</p>
            <Link className="button-ver-mas" to={`/Items/${id}`}> Ver Detalle</Link> 
        </div>
       
    )
}

export default Items