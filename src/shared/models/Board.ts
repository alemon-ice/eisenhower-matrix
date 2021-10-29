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
        const matrixList = [
            this.lists.find(list => list.name.includes('[1]')),
            this.lists.find(list => list.name.includes('[2]')),
            this.lists.find(list => list.name.includes('[3]')),
            this.lists.find(list => list.name.includes('[4]'))
        ]
        return matrixList
    }

    constructor(board: IBoard) {
        this.id = board.id
        this.url = board.url
        this.name = board.name
        this.lists = board.lists
    }
}