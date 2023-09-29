import { useEffect, useState } from "react";
import "./ItemsDetailContainer.css";
import {getProductsId} from "../../moks"
import ItemsDetail from "../ItemsDetail/ItemsDetail"
import { useParams } from "react-router-dom";



const ItemsDetailContainer = () => {

    const [products, setProducts] = useState(null)
    const id = useParams().id;

    const [loading, setLoading]=useState(false)

    useEffect (()=>{
        setLoading(true)
        getProductsId (+id)
        .then (response =>{
            setProducts (response)
        })
        .catch (error=>{
            console.error(error);
        })
        .finally( () => setLoading (false) )

    }, [id])


return (
    <div className="productos-detail">
        {
            loading ? (<span className="loader">Loading...</span>) : (<ItemsDetail {...products}/>)
        }
        
    </div>
)

}

export default ItemsDetailContainer