import { IBoard } from 'shared/interfaces/board'

export async function fetchBoardService(): Promise<IBoard> {
    const boardResponse: IBoard =
        await fetch(`api/trello/board`).then(response => response.json())
    
    return boardResponse
}
