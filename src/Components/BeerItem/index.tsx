import React from 'react'
import {PropBeerInterface} from '../../types/BeerInterface'

const BeerItem = (props:PropBeerInterface) => {

    const {name, tagline, description, image_url} = props.beer

    return(
        <div className="beer">
            <img src={image_url} alt={name} />
            <h3>{name}</h3>
            <span>{tagline}</span>
            <small>{description}</small>
        </div>

    );
}

export default BeerItem