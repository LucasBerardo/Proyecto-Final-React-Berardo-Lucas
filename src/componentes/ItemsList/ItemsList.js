import Items from "../Items/Items"
import "./ItemsList.css"

const ItemsList = ({products}) =>{
    return (

        <div className="productos">
            {products.map(prod => <Items key={prod.id}{...prod}/> )}
            </div>
    )
}

export default ItemsList
