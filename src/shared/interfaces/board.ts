import { ICard } from './card'

export interface IBoard {
    id: string
    url: string
    name: string
    lists: IList[]
}

export interface IList {
    id: string
    name: string
    cards: ICard[]
    idBoard: string
}
