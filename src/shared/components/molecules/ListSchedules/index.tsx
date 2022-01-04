import React, { useCallback, useState } from 'react';

import styles from 'shared/styles/ListSchedules.module.css'
import { IList } from 'shared/interfaces/board';
import { markTaskAsCompleted } from 'shared/services/card.service'
import { EisenhowerMatrixDescription } from 'shared/utils/content';
import { Card, PlaceholderForLists } from 'shared/components/atoms'
import {
  FaInfoCircle,
  AiFillCaretRight,
  AiFillCaretLeft
} from 'shared/utils/external-components';

interface IProps {
    list: IList
    refresh(): void
}

const ListSchedules: React.FC<IProps> = ({ list, refresh }) => {
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

  function completeTask(cardId: string) {
    (async () => {
      try {
        const findCard = list.cards.find(item => item.id === cardId)
        await markTaskAsCompleted(findCard)
      } catch (err) {
        console.error({completeTaskError: err})
      } finally {
        refresh()
      }
    })()
  }

  const handleCompleteTask = useCallback(completeTask, [list.cards, refresh])

  return (
    <div className={styles.container}>
      <div className={styles.animated} id={animation}>
        <ul className={styles.listCards}>
          <div className={styles.listName}>
            <h2>{list.name}</h2>
            <div onMouseMove={handleShowInfo} onMouseLeave={handleHideInfo}>
              <FaInfoCircle size={20} />
            </div>
          </div>
          {activeInfo && (
            <h3 className={styles.listDescription}>
              {EisenhowerMatrixDescription['SCHEDULES']}
            </h3>
          )}
          {!!list.cards.length
            ? list.cards.map(card => <Card key={card.id} card={card} completeTask={handleCompleteTask} />)
            : <PlaceholderForLists />}
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