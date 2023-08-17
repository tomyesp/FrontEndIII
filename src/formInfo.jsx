import React from 'react';
import Card from './Card';
import ErrorMsg from './ErrorMsg';

function FormInfo({ nombre, libro, usuarios }) {

    const validarNombre = (nombre) => {
        const quitarEspacios = nombre.trim()
        if(quitarEspacios.length > 3){
          return true
        } else {
          return false
        }
      }
    
    const validarLibro = (libro) => {
        if(libro.length < 6){
          return true
        } else {
          return false
        }
    }

  return (
    <div className='form-info'>
      <h2>Información del Formulario</h2>
      <p>Nombre: {nombre}</p>
      <p>Libro Favorito: {libro}</p>
      <div>
        {validarNombre(nombre) && validarLibro(libro) ? (
          <Card usuarios={usuarios} />
        ) : (
          <ErrorMsg />
        )}
      </div>
    </div>
  );
}

export default FormInfo;