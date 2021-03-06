import React, { useState, useCallback } from 'react'

import { MatrixCardItem } from 'shared/components/molecules'
import { IList } from 'shared/interfaces/board'
import styles from 'shared/styles/Matrix.module.css'

interface IProps {
    lists: IList[]
    handleChangeList(index: number): void
}

const listsStyles = [
  styles['important-urgent'],
  styles['important-notUrgent'],
  styles['notImportant-urgent'],
  styles['notImportant-notUrgent']
]

const Matrix: React.FC<IProps> = ({ lists, handleChangeList }) => (
    <div className={styles.matrix}>
      <div className={styles.null} />

      <div className={styles.horizontalAxis_urgent}>
        <span>
          Urgente
        </span>
      </div>
      <div className={styles.horizontalAxis_notUrgent}>
        <span>
          Não Urgente
        </span>
      </div>

      <div className={styles.verticalAxis_impotant}>
        <span>
          Importante
        </span>
      </div>
      <div className={styles.verticalAxis_notImportant}>
        <span>
          Não Importante
        </span>
      </div>

      {lists.map((list, index) => (
        <MatrixCardItem
          list={list}
          key={list.id}
          isMainTasks={index === 0}
          classStyles={listsStyles[index]}
          handleChangeList={() => handleChangeList(index)}
        />
      ))}
    </div>
);

export default Matrix;