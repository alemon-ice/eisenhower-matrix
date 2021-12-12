import { datefns, ptBR } from 'shared/utils/external-libs'

export function formatDateInCards(datestring: string) {
    const date = datefns.parseISO(datestring)

    return datefns.format(date, "dd 'de' MMMM", { locale: ptBR })
}