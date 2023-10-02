import React from "react";
import { useForm } from "react-hook-form";
import "../Contacto/Contacto.css"


const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (
<div className="container">
<h1 className="main-title">Contacto</h1>
    <div >
        <form className="formulario" onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
            <input type="password" placeholder="Ingresá tu contraseña" {...register("password")} />   

            <button className="enviar" type="submit">Enviar</button>

        </form>
    </div>
    </div>
    

  )
}

export default Contacto

