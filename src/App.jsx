import React, { useState } from 'react'
import FormInfo from './formInfo';
import './App.css'

function App() {

  const [usuarios,setUsuario]=useState([]);
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const addUser= (user) => {
    setUsuario([...usuarios, user]);
  };

  const [nombre,setNombre]=useState("");
  const [libro,setLibro]=useState("");

  const handleSubmit = (e)=>{
      e.preventDefault();

      if(nombre && libro){
          addUser({nombre,libro});
          setNombre("");
          setLibro("");
          setMostrarInfo(true);
      }
  }


  return (

    <div className='App'>
      <h1>Libros Favoritos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <input type="text" placeholder="Ingrese su libro favorito" value={libro} onChange={(e)=>setLibro(e.target.value)} />
        <button type="submit">Enviar</button>        
      </form>

      <div>
        {mostrarInfo ? (
          <FormInfo
            nombre={nombre}
            libro={libro}
            usuarios={usuarios}
          />
        ) : (
          <div>Info</div>
        )}
      </div>
      
      
    </div>
  )
}

export default App;
