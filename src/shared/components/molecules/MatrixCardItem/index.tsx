import React from 'react'
import { FaExclamation, FaEllipsisH } from 'react-icons/fa'

import styles from 'styles/Home.module.css'
import { IList } from 'shared/interfaces/board'

interface IProps {
    list: IList
    isMainTasks: boolean
    classStyles?: string
}

const MatrixCardItem: React.FC<IProps> = ({
    list,
    isMainTasks,
    classStyles = ''
}) => {
    const postitStyles = `${isMainTasks ? styles.exclamation: ''} ${styles.postit}`
    return (
        <div className={`${styles.quadrant} ${styles[classStyles]}`}>
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
        </div>
    );
};

export default MatrixCardItem;