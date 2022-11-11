import React from 'react';
import styles from '/styles/BodyRetireAdvisory.module.css';
import ParticipantList from '/components/ParticipantList.js';
import ParticipantItem from '/components/ParticipantItem.js';

const participants = [
    'pipocast',
    'Santiago Cardenas'
];

const info = [
    "Privada",
    "Team de aprendizaje",
    "Asesoria",
    "11 de Noviembre del 2022",
    "4:00 P.M - 6:00 P.M",
    "Pepito Perez Parra",
    "presencial salon 407D",
    ""
];

let user = 'pipocast'

let nombre_monitoria = 'Team de aprendizaje'

export default function BodyRetireAdvisory(){
    const [participantList, setParticipantsList] = React.useState(participants)

    const delete_participant = () => {
        console.log(participants)
        const participantsFiltered = participants.filter((item) => item !== user)
        console.log(participants)
        setParticipantsList(participants = participantsFiltered)
        console.log(participants)
    };

    return(
        <section className={styles.body_page}>
            <section className={styles.info_and_button_section}>
                <section className={styles.info_section}>
                    <section className={styles.nombre_monitoria_section}>
                        <p>
                            {nombre_monitoria}
                        </p>
                    </section>
                    <section className={styles.info_monitoria_section}>
                        <p> <b>Vista:</b> {info[0]}  </p>
                        <p> <b>Nombre:</b> {nombre_monitoria} </p>
                        <p> <b>Tipo de asesoría:</b> {info[2]} </p>
                        <p> <b>Fecha:</b> {info[3]} </p>
                        <p> <b>Hora:</b> {info[4]} </p>
                        <p> <b>Responsable:</b> {info[5]} </p>
                        <p> <b>Medio:</b> {info[6]} </p>
                        <p> <b>Descripción:</b> {info[7]} </p>
                    </section>
                </section>
                <section onClick={delete_participant} className={styles.button_salir_section}>
                    <input type="button" id="button_get_out_advisory" className={styles.button_salir} value="SALIR DE LA ASESORIA" />
                </section>
            </section> 
            <section className={styles.participantes_section}>
                <section className={styles.title_paticipantes_section}>
                    <h1>
                        Participantes
                    </h1>
                </section>
                {<ParticipantList value={participants}>

                    {participants.map(participant =>
                        <ParticipantItem key={participant} text={participant}/>)}

                    </ParticipantList>}
            </section>
        </section>
    );
}