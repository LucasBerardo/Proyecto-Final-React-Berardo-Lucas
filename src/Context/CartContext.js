import { createContext, useEffect, useState } from "react";

export const CartContex = createContext({
    carrito: []
});

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

const agregarItems = (items, cantidad) =>{
    if(!inCart(items.id)){
        setCarrito(prev=>[...prev, {...items,cantidad}])
    } else {
        alert("el prdocuto ya fue agregado")
    }
}

const removerItems = (itemsId)=> {
    const cartUpdate = carrito.filter( prod => prod.id !== itemsId )
    setCarrito(cartUpdate)
    console.log(cartUpdate)
    }


const limpiarCarrito = () => {
    setCarrito ([])
}

const inCart = (itemsId) => {
    return carrito.some(prod=> prod.id === itemsId)
}

const cantidadEnCarrito = () =>{
    return carrito.reduce (( acc, prod) => acc + prod.cantidad, 0 )
}

useEffect(()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
},[carrito])

return (
<CartContex.Provider value={{ carrito ,agregarItems, removerItems, limpiarCarrito, inCart,cantidadEnCarrito}}>
    {children}
</CartContex.Provider>
)}