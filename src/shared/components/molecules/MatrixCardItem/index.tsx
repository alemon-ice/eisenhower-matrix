import React from 'react'
import { FaExclamation, FaEllipsisH } from 'react-icons/fa'

import styles from 'shared/styles/MatrixCardItem.module.css'
import { IList } from 'shared/interfaces/board'

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
}) => {
    const postitStyles = `${isMainTasks ? styles.exclamation: ''} ${styles.postit}`
    return (
        <div className={`${styles.quadrant} ${classStyles}`}>
        {list.cards.map(
            (card, index) => index <= 7 ? (
                <div
                    key={card.id}
                    className={postitStyles}
                >
                {isMainTasks ? (
                    <FaExclamation color="#ff1a1a"size={25} />
                ) : <span className={styles.dot} />}
                <span className={styles.detail} />
                </div>
            ) : index === 8 ? (
            <div key={card.id} className={`${styles.postit} ${styles.more}`}>
                <FaEllipsisH color="#aaa"size={25} />
            </div>
            ) : null
        )}
        <button className={styles.quadrantEvent} onClick={handleChangeList} />
        </div>
    );
};

export default MatrixCardItem;