import Items from '../Items/Items'

const ItemsList = ({products}) =>{
    return (
        <div>
            {products.map(prod => <Items key={+prod.id}{...prod}/>)}
        </div>
    )
}

export default ItemsList
