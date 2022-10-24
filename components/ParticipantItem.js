import styles from '../styles/ParticipantItem.module.css';

function ParticipantItem (props) {
    return (
        <li className={styles.participantItem}>
            <p className={styles.participant}>
                {props.text}
            </p>
        </li>
    );
}

export { ParticipantItem };