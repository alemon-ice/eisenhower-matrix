import React from 'react';

import styles from 'shared/styles/CardToastBody.module.css'

interface IProps {
	text: string
	buttonText: string
	onClick(): void
}

const ToastBody: React.FC<IProps> = ({ text, buttonText, onClick }) => (
	<div className={styles.toastContent}>
	<span>{text}</span>
	<button className={styles.toastContentButton} onClick={onClick}>{buttonText}</button>
	</div>
);

export default ToastBody;