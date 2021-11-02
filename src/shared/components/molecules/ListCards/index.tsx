import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import styles from 'shared/styles/ListCards.module.css'
import { IList } from 'shared/interfaces/board';
import { EisenhowerMatrixDescription } from 'shared/utils/content';

interface IProps {
    list: IList
    listIndex: number
    activeInfo: boolean
    handleShowInfo(): void
    handleHideInfo(): void
}

const ListCards: React.FC<IProps> = ({
    list,
    listIndex,
    activeInfo,
    handleShowInfo,
    handleHideInfo
}) => (
  <ul className={styles.listCards}>
    <div>
      <h2>{list.name}</h2>
      <div onMouseMove={handleShowInfo} onMouseLeave={handleHideInfo}>
        <FaInfoCircle size={20} />
      </div>
    </div>
    {activeInfo && <h3>{EisenhowerMatrixDescription[listIndex]}</h3>}
    {list.cards.map(card => (
      <li key={card.id}>
        <span className={styles.cardTitle}>{card.name}</span>
        {card.desc && <span className={styles.cardSubtitle}>{card.desc}</span>}
        <a
          href={card.url}
          target="_blank"
          rel="noreferrer"
          className={styles.cardLink}
        >Visualizar no trello</a>
      </li>
    ))}
  </ul>
);

export default ListCards;