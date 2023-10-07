import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const CartContex = createContext({
    carrito: []
});

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

const productoRepetido = () =>{
    Swal.fire({
        icon: 'error',
        text: 'El producto ya fue agregado al carrito',
      })
}

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

const agregarItems = (items, cantidad) =>{
    if(!inCart(items.id)){
        setCarrito(prev=>[...prev, {...items,cantidad}])
    } else { productoRepetido()
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

const totalEnCarrito = () =>{
    return carrito.reduce (( acc, prod) => acc + prod.cantidad * prod.precio, 0 )
}

useEffect(()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
},[carrito])

return (
<CartContex.Provider value={{ carrito ,agregarItems, removerItems, limpiarCarrito, inCart,cantidadEnCarrito,totalEnCarrito}}>
    {children}
</CartContex.Provider>
)}