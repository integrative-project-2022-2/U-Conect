import styles from '/styles/ParticipantItem.module.css';

export default function ParticipantItem (props) {
    return (
        <li className={styles.participantItem}>
            <p className={styles.participant}>
                {props.text}
            </p>
        </li>
    );
}