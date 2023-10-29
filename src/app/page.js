'use client'

import { useState, useEffect } from "react";
import axios from "axios";

function Categorias(){
  const [categorias, setCategorias] = useState([]);

  useEffect(()=>{
    const ObtenerCategorias = async() =>{
      const url = 'https://api-backend-mqv1.onrender.com/api/categories';
      const result = await axios.get(url);

      setCategorias(result.data);
    }

    ObtenerCategorias();
  });


  return(
    <div>
      <h1>Lista de datos ategorias ropa deportivas:</h1>
      <ul>
        {categorias.length === 0 && <p>Cargando....</p>}
        {
          categorias.map((datos, i) => {
            return(
              <li key={i}>
                <h4>Nombre: {datos.name}</h4>
                <p>Descripción: {datos.description}</p>
                <p>Categoria: {datos.categorySex}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Categorias;
