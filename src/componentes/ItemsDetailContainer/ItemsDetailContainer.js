import { useEffect, useState } from "react";
import "./ItemsDetailContainer.css";
import {getProductsId} from "../../moks"
import ItemsDetail from "../ItemsDetail/ItemsDetail"
import { useParams } from "react-router-dom";

const ItemsDetailContainer = () => {

    const [products, setProducts] = useState(null)
    const id = useParams().id;

    useEffect (()=>{
        getProductsId (+id)
        .then (response =>{
            setProducts (response)
        })
        .catch (error=>{
            console.error(error);
        })
    }, [id])


return (
    <div>
        <ItemsDetail {...products}/>
    </div>
)

}

export default ItemsDetailContainer