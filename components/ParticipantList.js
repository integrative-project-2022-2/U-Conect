import styles from '../styles/ParticipantList.module.css'

function ParticipantList(props) {
    return (
        <section>
            <ul 
                className={styles.participantList}
            >
                {props.children}
            </ul>
        </section>
    );
}

export { ParticipantList };