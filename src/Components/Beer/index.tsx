import React, { useState } from 'react';
import axios from 'axios'
import {BeerInterface} from '../../types/BeerInterface'
import BeerList from '../BeerList'
 
const Beer = () => {

  const [beerList, setBeerList] = useState<BeerInterface[]>([])

  const ShowBeer = () => {
    axios.get('https://api.punkapi.com/v2/beers/?per_page=8')
      .then(resposta => setBeerList(resposta.data))
  }
 
  return (
    <div className="food-beer-list food-shop">

      <h1>Tipos de Cerveja</h1>
      <button onClick={ShowBeer}> Buscar Cerveja</button>

      <BeerList bebida={beerList}/>

    </div>
  );
}

export default Beer;