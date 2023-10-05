import { useState, useEffect } from "react";
import ItemsList from "../ItemsList/ItemsList";
import "./ItemsListContainer.css"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../Firebase/config";





const ItemsListContainer = () => {


   const [products, setProducts] = useState([]);
   const [titulo, setTitulo] = useState ("Productos");

   const categoria = useParams().categoria;
   

   useEffect (()=>{
    const productosRef = collection (db, "Productos");

    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
    
        getDocs(q)
        .then((resp) => {
        setProducts(
            resp.docs.map( (doc) =>{
                return {...doc.data(), id: doc.id}
            })
        ) 
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