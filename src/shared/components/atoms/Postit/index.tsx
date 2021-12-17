import React from 'react';

import { FaExclamation, FaEllipsisH } from 'shared/utils/external-components'
import styles from 'shared/styles/Postit.module.css'
import { ICard } from 'shared/interfaces/card';

interface IProps {
    card: ICard
    index: number
    isMainTasks: boolean
    handleChangeList(): void
}

const Postit: React.FC<IProps> = ({
    card,
    index,
    isMainTasks,
    handleChangeList
}) => (
    index <= 7 ? (
        <div onClick={handleChangeList} className={`${isMainTasks ? styles.exclamation: ''} ${styles.postit}`}>
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
);

export default Postit;