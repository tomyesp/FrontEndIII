import React from "react";


function Card({usuarios}){
    return(
        <div>
            <h2>Libros Favoritos</h2>
            {usuarios.map((usuario, index) => (
                <div key={index} className="card">
                    <h3>Hola {usuario.nombre}!</h3>
                    <h3>tu libro favorito es: {usuario.libro}</h3>
                </div>
            ))}
        </div>
    )
}

export default Card;