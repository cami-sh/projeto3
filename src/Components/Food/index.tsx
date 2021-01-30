import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Category} from "../../types/Category"
import {Filter} from "../../types/Filter"
import FoodContainer from '../FoodContainer'

const Food = () => {

  const [categorias, setCategorias] = useState<Category[]>([])
  const [filtro, setFiltro] = useState<Filter[]>([])
  const [filtroCategoria, setFiltroCategoria] = useState<string>("")
  const [filtroBusca, setFiltroBusca] = useState<string>("")
  const [show, setShow] = useState<string>("")

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(resposta => setCategorias(resposta.data.categories))
  }, [])

  useEffect(() => {
    if (filtroCategoria !== "") {
      setShow(filtroCategoria)
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filtroCategoria}`)
        .then(resposta => setFiltro(resposta.data.meals))
    }
  }, [filtroCategoria])

  useEffect(() => {
    setShow(filtroBusca)
    if (filtroBusca !== "") {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${filtroBusca}`)
        .then(resposta => setFiltro(resposta.data.meals))
    }else{
      setFiltro([])
    }
  }, [filtroBusca])

  return (
    <div className="food-beer-list food-shop">
      <h1>Tipos de pratos</h1>
      <p>
        Selecione uma categoria ou digite a comida (em inglês):
        <input type="text" placeholder="Digite a comida..." onChange={(event) => setFiltroBusca(event.target.value)}/>
      </p>

      <ul>
        {
          categorias !== null &&
          categorias.map((item:Category) => (
            <li key={item.idCategory} onClick={() => setFiltroCategoria(item.strCategory)}>{item.strCategory}</li>
          ))
        }

      </ul>
      <h2>Tipo selecionado: <strong>{show}</strong></h2>
      
      <FoodContainer comida={filtro}/>
    </div>
  );
}

export default Food;