import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd})=>{
    const [cantidad, setCantidad] = useState (initial)

    const increment = () =>{
        if(cantidad < stock) {
            setCantidad (cantidad + 1)
        }
    }

const decrement = () =>{
    if (cantidad >1 ) {
        setCantidad (cantidad - 1)
    }
}

return (
   
    <div>
        <div className="detail">
            <button onClick={decrement} className="button-decrement"> -
            </button>
            <h4 className="numer">{cantidad}</h4>
            <button onClick={increment} className="button-increment" > +
            </button>
            </div>
            <div className="agregar-prod">
            { stock >=1 ? 
        <button className="button-agregar" onClick={()=> onAdd (cantidad)} diasabled={!stock}>
            Agregar al Carrito </button>
            :
            <h1>Sin Stock</h1>
             }
             </div>
            </div>
)
}

export default ItemCount;