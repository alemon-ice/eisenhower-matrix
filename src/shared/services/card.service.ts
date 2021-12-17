import { ICard } from 'shared/interfaces/card';

export async function markTaskAsCompleted(card: ICard) {
    const cardResponse: ICard = await fetch(`api/trello/card/${card.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            ...card,
            dueComplete: true
        })
    }).then(response => response.json())

    return cardResponse
}