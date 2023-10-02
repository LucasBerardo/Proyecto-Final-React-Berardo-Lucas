import { useEffect, useState } from "react";
import "./ItemsDetailContainer.css";
import ItemsDetail from "../ItemsDetail/ItemsDetail"
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../Firebase/config"


const ItemsDetailContainer = () => {

    const [products, setProducts] = useState(null)
    const id = useParams().id;

    const [loading, setLoading]=useState(false)

    useEffect (()=>{
        setLoading(true)
        const docRef = doc (db, "Productos", id);
    getDoc(docRef)
    .then((resp)=>{
        setProducts(
            {...resp.data(),id: resp.id }
        )
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