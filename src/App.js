import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoNoticias from "./components/ListadoNoticias"

function App() {

  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState("general");
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=81c57e6daea446f9bbe36524f8e352fb`;

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      guardarNoticias(resultado.articles);
    }
    consultarAPI()
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />

      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />

        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
