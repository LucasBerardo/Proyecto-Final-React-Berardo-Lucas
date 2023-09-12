import "./ItemCount.css";
import { useState } from "react";


const ItemCount = ({stock, initial, onAdd})=>{
    const [quantity, setQuantity] = useState (initial)

    const increment = () =>{
        if(quantity < stock) {
            setQuantity (quantity + 1)
        }
    }


const decrement = () =>{
    if (quantity >0 ) {
        setQuantity (quantity - 1)
    }
}

return (
    <div>
        <div className="detail">
            <button onClick={decrement} className="button-decrement"> -
            </button>
            <h4 className="numer">{quantity}</h4>
            <button onClick={increment} className="button-increment" > +
            </button>
            </div>
        <button className="button-agregar" onClick={()=> onAdd (quantity)} diasabled={!stock}>
            Agregar al Carrito </button>
            </div>
)

}

export default ItemCount;