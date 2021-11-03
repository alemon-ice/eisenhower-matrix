import React from 'react'

import styles from 'shared/styles/MatrixCardItem.module.css'
import { IList } from 'shared/interfaces/board'
import { Postit } from 'shared/components/atoms'

interface IProps {
    list: IList
    isMainTasks: boolean
    classStyles?: string

    handleChangeList(): void
}

const MatrixCardItem: React.FC<IProps> = ({
    list,
    isMainTasks,
    handleChangeList,
    classStyles = ''
}) => (
    <div onClick={handleChangeList} className={`${styles.quadrant} ${classStyles}`}>
        {list.cards.map((card, index) => (
            <Postit
                key={card.id}
                card={card}
                index={index}
                isMainTasks={isMainTasks}
                handleChangeList={handleChangeList}
            />
        ))}
    </div>
);

export default MatrixCardItem;