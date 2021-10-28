import { IBoard, IList } from "shared/interfaces/board"

export default class Board {
    private id: string
    private url: string
    private name: string
    private lists: IList[]

    getId() {
        return this.id
    }

    getUrl() {
        return this.url
    }

    getName() {
        return this.name
    }

    getList() {
        return this.lists
    }

    constructor(board: IBoard) {
        this.id = board.id
        this.url = board.url
        this.name = board.name
        this.lists = board.lists
    }
}