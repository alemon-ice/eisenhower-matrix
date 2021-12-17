import { BsEmojiLaughing } from 'shared/utils/external-components'

import styles from 'shared/styles/Placeholder.module.css'

const PlaceholderForLists: React.FC = () => (
    <div className={styles.placeholderWrapper}>
        <BsEmojiLaughing size={20} className={styles.icon} />
        <span className={styles.message}>{`You don't have any tasks!`}</span>
    </div>
)

export default PlaceholderForLists;