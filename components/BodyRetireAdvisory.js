import React from 'react';
import styles from '../styles/BodyRetireAdvisory.module.css';
import { ParticipantList } from './ParticipantList.js';
import { ParticipantItem } from './ParticipantItem.js';

const participants = [
    {text: 'Pepito 1'},
    {text: 'Pepito 2'},
    {text: 'Pepito 3'},
    {text: 'Pepito 4'},
];

const info = [
    "Privada",
    "Monitoria COE II",
    "Monitoria",
    "06 de septiembre del 2022",
    "9:30 AM a 12:00 PM",
    "Pepito Perez Parra",
    "Presencial (Salon 102A)",
    "Monitoria de COE II en el que deseo que se revise la tesis que usare en un ensayo"
];

let nombre_monitoria = 'Monitoria COE II'

function BodyRetireAdvisory(){
    const [participantList, setParticipantsList] = React.useState(participants)

    const delete_participant = () => {
        setParticipantsList(participants.pop())
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
                        <ParticipantItem key={participant.text} text={participant.text}/>)}

                    </ParticipantList>}
            </section>
        </section>
     
    );
}

export { BodyRetireAdvisory };