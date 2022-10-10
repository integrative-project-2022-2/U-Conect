import styles from '/styles/ParticipantList.module.css'

export default function ParticipantList(props) {
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