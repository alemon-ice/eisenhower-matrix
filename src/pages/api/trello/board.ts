require('dotenv').config()

export default async function getBoards(req: any, res: any) {
    const board = await fetch(
        `${process.env.TRELLO_BASE_URL}/boards/${process.env.BOARD_ID}?${process.env.PARAMS}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    ).then((response) => {
        return response.json()
    })
    const boardLists = await fetch(
        `${process.env.TRELLO_BASE_URL}/boards/${process.env.BOARD_ID}/lists?${process.env.PARAMS}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    ).then((response) => {
        return response.json()
    })

    const cardsPromise = await Promise.resolve(boardLists.map(list => {
        return fetch(
            `${process.env.TRELLO_BASE_URL}/lists/${list.id}/cards?${process.env.PARAMS}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => response.json())
    }))
    const cards = await Promise.all(cardsPromise)

    return res.status(200).json({
        id: board.id,
        name: board.name,
        lists: boardLists.map((list, i) => ({ ...list, cards: cards[i] }))
    })
  }
  