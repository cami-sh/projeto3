import React from 'react'
import {PropFilterItem} from '../../types/Filter'

const FilterItem = (props:PropFilterItem) => {

    const {strMeal, strMealThumb} = props.filterItem

    return (
        <div className="food-item">
            <img src={strMealThumb} alt={strMeal} />
            <p>{strMeal}</p>
        </div>
    )
}

export default FilterItem