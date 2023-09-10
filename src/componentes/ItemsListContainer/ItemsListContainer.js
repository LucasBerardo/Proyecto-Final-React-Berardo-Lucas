import { useState, useEffect } from "react";
import  {getProducts} from "../../moks";
import ItemsList from "../ItemsList/ItemsList";
import "./ItemsListContainer.css"


const ItemsListContainer = () => {


   const [products, setProducts] = useState([]);
   

useEffect(()=>{
     getProducts ()
.then ((response)=>{
setProducts (response)
})
.catch (error => {
    console.error(error)
})
}, [])


    return (

    <section>
        <h1> PRODUCTOS </h1>
     
        <div className="productos-inicio">
    

            <ItemsList products={products}/>
            
               </div>
               </section>
                             )
                            }


export default ItemsListContainer;