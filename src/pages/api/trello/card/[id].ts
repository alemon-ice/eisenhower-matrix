import { ICard } from "shared/interfaces/card"

require('dotenv').config()

export default async function markTaskAsCompleted(req: any, res: any): Promise<ICard> {
    const card: ICard = JSON.parse(req.body)

    const cardResponse: ICard = await fetch(
        `${process.env.TRELLO_BASE_URL}/cards/${card.id}?${process.env.PARAMS}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: req.body
        }
    ).then((response) => {
        return response.json()
    })

    return res.status(200).json(cardResponse)
}