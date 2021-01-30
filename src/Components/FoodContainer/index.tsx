import React from 'react'
import {PropFoodContainer, Filter} from '../../types/Filter'
import FilterItem from '../FilterItem'

const FoodContainer = (props:PropFoodContainer) => {

    return(
        <div className="food-container">

            {
                props.comida !== null &&
                props.comida.map((item:Filter) => (
                    <FilterItem key={item.idMeal} filterItem={item}/>
            ))}

        </div>
    )

}

export default FoodContainer