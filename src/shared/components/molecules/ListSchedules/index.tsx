import React, { useEffect, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';

import styles from 'shared/styles/ListSchedules.module.css'
import { IList } from 'shared/interfaces/board';
import { EisenhowerMatrixDescription } from 'shared/utils/content';

interface IProps {
    list: IList
}

const ListSchedules: React.FC<IProps> = ({ list }) => {
  const [activeInfo, setActiveInfo] = useState(false)
  const [visible, setVisible] = useState(false)
  const [animation, setAnimation] = useState(styles.hideSchedulesList)

  function handleShowInfo() {
    !activeInfo && setActiveInfo(true)
  }

  function handleHideInfo() {
    activeInfo && setActiveInfo(false)
  }

  function handleChangeVisibility() {
    changeAnimation()
    setVisible(prev => !prev)
  }

  function changeAnimation() {
    setAnimation(visible ? styles.hideSchedulesList : styles.showSchedulesList)
  }

  return (
    <div className={styles.container}>
      <div className={styles.animated} id={animation}>
        <ul className={styles.listCards}>
          <div>
            <h2>{list.name}</h2>
            <div onMouseMove={handleShowInfo} onMouseLeave={handleHideInfo}>
              <FaInfoCircle size={20} />
            </div>
          </div>
          {activeInfo && <h3>{EisenhowerMatrixDescription['SCHEDULES']}</h3>}
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
        <div className={styles.tab}>
          <button onClick={handleChangeVisibility}>
            {visible ? (
              <AiFillCaretLeft size={20} className={styles.rotateArrowTabVisible} />
              ) : (
              <AiFillCaretRight size={20} className={styles.rotateArrowTabNotVisible}/>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListSchedules;