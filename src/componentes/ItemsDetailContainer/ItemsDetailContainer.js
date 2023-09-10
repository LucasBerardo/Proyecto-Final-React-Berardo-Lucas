import { useEffect, useState } from "react";
import "./ItemsDetailContainer.css";
import {getProductsId} from "../../moks"
import ItemsDetail from "../ItemsDetail/ItemsDetail"

const ItemsDetailContainer = () => {

    const [products, setProducts] = useState(null)

    useEffect (()=>{
        getProductsId ('1')
        .then (response =>{
            setProducts (response)
        })
        .catch (error=>{
            console.error(error);
        })
    }, [])


return (
    <div>
        <ItemsDetail {...products}/>
    </div>
)

}

export default ItemsDetailContainer