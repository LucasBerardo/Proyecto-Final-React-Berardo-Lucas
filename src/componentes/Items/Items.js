import React from "react"
import "./Items.css"

const Items = ({id,nombre,img,precio,stock,descripcion}) =>{
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
                   Categoria: {descripcion}
                </p>
            </section>

        </card>
       
    )
    

}

export default Items