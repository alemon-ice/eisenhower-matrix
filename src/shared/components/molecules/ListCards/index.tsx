import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import styles from 'shared/styles/ListCards.module.css'
import { IList } from 'shared/interfaces/board';
import { EisenhowerMatrixDescription } from 'shared/utils/content';
import { PlaceholderForLists } from 'shared/components/atoms'

interface IProps {
    list: IList
    listIndex: number
}

const ListCards: React.FC<IProps> = ({ list, listIndex }) => {
  const [activeInfo, setActiveInfo] = useState(false)

  function handleShowInfo() {
    !activeInfo && setActiveInfo(true)
  }

  function handleHideInfo() {
    activeInfo && setActiveInfo(false)
  }

  return (
    <ul className={styles.listCards}>
      <div className={styles.listName}>
        <h2>{list.name}</h2>
        <div onMouseMove={handleShowInfo} onMouseLeave={handleHideInfo}>
          <FaInfoCircle size={20} />
        </div>
      </div>
      {activeInfo && (
        <h3 className={styles.listDescription}>
          {EisenhowerMatrixDescription[listIndex]}
        </h3>
      )}
      {!!list.cards.length ? list.cards.map(card => (
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
      )) : <PlaceholderForLists />}
    </ul>
  )
}

export default ListCards;