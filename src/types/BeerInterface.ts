export interface BeerInterface {
    id: number,
    name: string,
    tagline: string,
    description: string,
    image_url:string

}

export interface PropBeerInterface {
    beer: BeerInterface
}

export interface PropBeerList {
    bebida: BeerInterface[]
}