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

export interface ICard {
    id: string
    url: string
    name: string
    desc: string
    idBoard: string
    idList: string
}
