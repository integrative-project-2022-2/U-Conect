import React from "react";
import { useEffect, useState } from "react";
import ConsultInfoLayout from "../../components/ConsultInfoLayout";


function join() {
  if (counseling.view == "Publica") {
    if (!counseling.participants.includes(student.name)) {
      let aux = counseling.participants
      aux.push(student.name)
      setCounseling({
        name: counseling.name,
        subject: counseling.subject,
        view: counseling.view,
        type: counseling.type,
        date: counseling.date,
        hour: counseling.hour,
        manager: counseling.manager,
        means: counseling.means,
        desc: counseling.desc,
        participants: aux
      })
    } else {
      alert("Ya se encuentra ingresado en la Asesoria")
    }
  } else {
    alert("La asesoria no se encuentra Publica")
  }
}

export default function JoinAdvisory({ info }) {

  const [page] = useState({
    title: "Ingresando a Asesoria",
    desc: "Aqui puedes ingresar a una asesoria"
  })

  const [student] = useState({
    name: "Juan Camilo Ramirez Tabares",
    rol: "Estudiante",
    img: "/image/profile_default.png"
  })

  const [counseling, setCounseling] = React.useState({
    name: "Primer Entrega de Producto",
    subject: "Proyecto Integrador I",
    view: "Publica",
    type: "Asesoria",
    date: "10 de Octubre del 2022",
    hour: "6:00 P.M.",
    manager: "Rocio Emilia Segovia",
    means: "Presencial",
    desc: "Entrega de la primera version del producto minimo viable para Proyecto Integrador I",
    participants: [
      "Jesus David Rodriguez",
      "Juan Felipe Castillo",
      "Cristian Camilo Cardona",
      "Sebastian Zapata",
      "Gabriel Kremer",
      "Juan Jose Osorio"
    ]
  }); //
  

  useEffect(() => {
    async () => {
      const URL = "http://localhost:3000/api/JoinAdvisory-api";
      const data = {
        id: 'A1'
      }
      const myInit = {
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json',
          'Accept':'Application-json'
        }
      };

      const res = await fetch(URL, myInit);
      console.log(res)
      const infoAct = await res.json();
      
      setCounseling({
        name: infoAct.activity_name,
        subject: infoAct.subject,
        view: infoAct.view_Activity,
        type: infoAct.type,
        date: infoAct.date_activity,
        hour: infoAct.end_hour,
        manager: infoAct.manager,
        means: infoAct.means,
        desc: infoAct.description,
        participants: []
      })
    }
  }, [])

  return (
    <div>
      <ConsultInfoLayout
        page={page}
        student={student}
        counseling={counseling}
        fun={join}
      ></ConsultInfoLayout>
    </div>
  )
}

//Es una bondad de next
// export const getServerSideProps = async (context) => {

//   const URL = "http://localhost:3000/api/JoinAdvisory-api";
//   const data = {
//     id: 'A1'
//   }

//   const myInit = {
//     method: 'POST',
//     body: JSON.stringify(data), // data can be `string` or {object}!
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   const res = await fetch(URL, myInit);
//   const info = await res.json();
//   console.log(info)

//   return {
//     props: {
//       info: info
//     }
//   }
// }