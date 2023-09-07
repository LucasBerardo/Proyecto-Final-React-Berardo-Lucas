const Items = ({id,nombre,img,precio,stock,descripcion}) =>{
    return(
        <article>
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre}/>
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

        </article>
    )
    

}

export default Items