import { useState, useEffect } from "react";
import  {getProducts} from "../../moks";
import ItemsList from "../ItemsList/ItemsList";


const ItemsListContainer = (greeting) => {


   const [products, setProducts] = useState([]);
   

useEffect(()=>{
     getProducts ()
.then ((response)=>{
setProducts (response)
})
.catch (error => {
    console.log (error)
})
}, [])


    return (
        <div>
            <h1> {greeting} </h1>

            <ItemsList products={products}/>
            
               </div>
                             

        
    )}


export default ItemsListContainer;