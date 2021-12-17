import { IBoard, IList } from "shared/interfaces/board"

export default class Board {
    private id: string
    private url: string
    private name: string
    private lists: IList[]

    private selectedMatrixListIndex?: number

    get getId() {
        return this.id
    }

    get getUrl() {
        return this.url
    }

    get getName() {
        return this.name
    }

    get matrixList() {
        const matrixList = [
            this.lists.find(list => list.name.includes('[1]')),
            this.lists.find(list => list.name.includes('[2]')),
            this.lists.find(list => list.name.includes('[3]')),
            this.lists.find(list => list.name.includes('[4]'))
        ]
        return matrixList
    }

    get selectedMatrixList() {
        return this.matrixList[this.selectedMatrixListIndex]
    }

    get schedulesList() {
        const schedulesList =
            this.lists.find(list => list.name.includes('[SCHEDULES]'))

        schedulesList.cards = schedulesList.cards.filter(
            schedule => !schedule.dueComplete
        )
        return schedulesList
    }

    get hasSchedules() {
        return !!this.schedulesList.cards.length
    }

    get selectedMatrixIndex() {
        return this.selectedMatrixListIndex
    }

    selectMatrixList(index: number) {
        return new Board({
            id: this.id,
            url: this.url,
            name: this.name,
            lists: this.lists,
        }, index)
    }

    constructor(board: IBoard, selectedMatrixListIndex?: number) {
        this.id = board.id
        this.url = board.url
        this.name = board.name
        this.lists = board.lists
        this.selectedMatrixListIndex = selectedMatrixListIndex
    }
}