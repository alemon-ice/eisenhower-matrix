import React, { useState } from 'react';

import { ICard } from 'shared/interfaces/card';
import { formatDateInCards } from 'shared/utils/formatting';
import { toastStyles } from 'shared/utils/toast'
import styles from 'shared/styles/Card.module.css'
import useToast from 'shared/hooks/useToast'

interface IProps {
    card: ICard
	completeTask(cardId: string): void
}

const Card: React.FC<IProps> = ({ card, completeTask }) => {
	const [checked, setChecked] = useState(false)

	const { showToast } = useToast()

	function handleCheckTask() {
		showToast({
			text: 'Task concluída com sucesso!',
			buttonText: 'cancelar ação',
			onClick: handleCancelAction,
			options: toastStyles.success,
			onClose: () => completeTask(card.id)
		})

		setChecked(true)
	}

	function handleCancelAction() {
		setChecked(false)
	}

  return (
    <li key={card.id} style={{ display: checked && 'none' }}>
      <span className={styles.cardTitle}>{card.name}</span>
      {!!card.desc ? <span className={styles.cardSubtitle}>{card.desc}</span> : null}
      {!!card.due ? (
        <div className={styles.dateWrapper}>
          <span className={styles.cardDate}>{formatDateInCards(card.due)}</span>
          <div className={styles.checkboxWrapper}>
            <span className={styles.checkboxLabel}>concluído?</span>
            <input
				type="checkbox"
				name=""
				id=""
				className={styles.checkbox}
				checked={checked}
				onChange={handleCheckTask}
			/>
          </div>
        </div>
      ) : null}
      <a
        href={card.url}
        target="_blank"
        rel="noreferrer"
        className={styles.cardLink}
      >Visualizar no trello</a>
    </li>
  )
}

export default Card;