export interface Filter {
    idMeal: number,
    strMealThumb: string,
    strMeal: string
}

export interface PropFilterItem {
    filterItem: Filter 
}

export interface PropFoodContainer {
    comida: Filter[]
}