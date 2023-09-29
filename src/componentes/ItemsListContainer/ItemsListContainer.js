import { useState, useEffect } from "react";
import  {getProducts} from "../../moks";
import ItemsList from "../ItemsList/ItemsList";
import "./ItemsListContainer.css"
import { useParams } from "react-router-dom";



const ItemsListContainer = () => {


   const [products, setProducts] = useState([]);
   const [titulo, setTitulo] = useState ("Productos");

   const categoria = useParams().categoria;
   

useEffect(()=>{
     getProducts ()
.then ((response)=>{
    if (categoria){
setProducts(response.filter((prod) => prod.categoria === categoria))
setTitulo (categoria);
    }
    else{
        setProducts(response);
        setTitulo("Todos Los Productos")
    }

          })
          .catch (error=>{
            console.error(error);
        })
       

}, [categoria])


    return (

    <section>
        <h1> {titulo} </h1> 

        <div className="productos-inicio">
    

            <ItemsList products={products} titulo={titulo}/>
            
               </div>
               </section>
                             )
                            }


export default ItemsListContainer;