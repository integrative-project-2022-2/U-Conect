import React from 'react';
import styles from '/styles/BodyRetireAdvisory.module.css';
import ParticipantList from '/components/ParticipantList.js';
import ParticipantItem from '/components/ParticipantItem.js';

let participants = [
    {idparticipant: 'pipocast'},
    {idparticipant: 'Santiago Cardenas'}
];

let info = [
    {activity_name: "Team de aprendizaje",
    date_activity: "11 de Noviembre del 2022",
    description: "",
    end_hour: "4:00 P.M - 6:00 P.M",
    manager: "Pepito Perez Parra",
    means: "presencial salon 407D",
    view_activity: "Privada",
    type: "Asesoria",
    date_activity: "11 de Noviembre del 2022"}
];

let userName = 'pipocast'

let nombre_monitoria = 'Team de aprendizaje'

export default function BodyRetireAdvisory({ idA, user }) {
    
    // find()
    constructInfo()
    constructParticipants()
    
    async function constructInfo() {
        const URL = "http://localhost:3000/api/leave_advisory_api";
        const data = {
          id: idA
        }
        const myInit = {
          method: 'POST',
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        };
    
        const res = await fetch(URL, myInit);
        const infoAct = await res.json();
    
        setInfoList(info = infoAct)
        console.log("info after query")
        console.log(info)
    }

    async function constructParticipants() {
        console.log("entro2")
        const URL = "http://localhost:3000/api/JoinAdvisory-api";
        const data = {
          id: idA
        }
        const myInit = {
          method: 'POSTPARTICIPANTS',
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        };
    
        console.log("antes de hacer el query")
        const res = await fetch(URL, myInit);
        const infoAct = await res.json();
        console.log(infoAct)
    
        setParticipantsList(participants = infoAct)
        console.log("participants after query")
        console.log(participants)
    }

    // function find(){
    //     {construct}
    //     console.log("entro a find")
    // }

    const [participantList, setParticipantsList] = React.useState(participants)
    const [infoList, setInfoList] = React.useState(info)

    const delete_participant = () => {
        const participantsFiltered = participants.filter((item) => item.name !== userName)
        setParticipantsList(participants = participantsFiltered)
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
                        <p> <b>Vista:</b> {info[0].view_activity}  </p>
                        <p> <b>Nombre:</b> {info[0].activity_name} </p>
                        <p> <b>Tipo de asesoría:</b> {info[0].type} </p>
                        <p> <b>Fecha:</b> {info[0].date_activity} </p>
                        <p> <b>Hora:</b> {info[0].end_hour} </p>
                        <p> <b>Responsable:</b> {info[0].manager} </p>
                        <p> <b>Medio:</b> {info[0].means} </p>
                        <p> <b>Descripción:</b> {info[0].description} </p>
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
                        <ParticipantItem key={participant.idparticipant} text={participant.idparticipant}/>)}

                    </ParticipantList>}
            </section>
        </section>
    );
}

BodyRetireAdvisory.defaultProps = {
    idA: 'A1',
    user: {
      name: 'JuanK',
      rol: 'Estudiante',
      img: "/image/profile_default.png"
    }
  }