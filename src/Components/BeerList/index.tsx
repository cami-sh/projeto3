import React from 'react'
import BeerItem from '../BeerItem'
import {PropBeerList, BeerInterface} from '../../types/BeerInterface'


const BeerList = (props: PropBeerList) => {
    return (
        <div className="beers-list">

            {
                props.bebida != null &&
                props.bebida.map((item:BeerInterface) => (
                    <BeerItem key={item.id} beer={item}/>
            ))
            }
      </div>
    )
}

export default BeerList