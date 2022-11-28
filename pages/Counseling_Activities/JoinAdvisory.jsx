import React from "react";
import { useEffect, useState } from "react";
import ConsultInfoLayout from "../../components/ConsultInfoLayout";

const page = {
  title: "Ingresar a Asesoria",
  desc: "Aqui puedes ingresar a una asesoria"
}

export default function JoinAdvisory({ idA, user }) {
  const [activity, setActivity] = useState([]);
  const [state, setState] = useState(false)

  function join() { joinAdvisory() }

  const joinAdvisory = async () => {
    const body = {
      idAct: idA,
      user: user.name
    }
    if (!state) {
      let v = activity.participant.includes(user.name)

      if (v) {
        console.log('Si se encontro')
        setState(true);
        alert('El usuario ya se encuentra en la Asesoria')
      } else {
        console.log('No se encontro')
        const put = await fetch("http://localhost:3000/api/JoinAdvisory-api", {
          method: 'PUT',
          body: JSON.stringify(body), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        })
        alert('Ha ingresado correctamente')
        construct()
      }
    } else {
      alert('El usuario ya se encuentra en la Asesoria')
    }
  }

  const construct = async () => {
    const URL = "http://localhost:3000/api/getAdvisory-api";
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
    console.log(infoAct)

    setActivity(infoAct)
  }

  useEffect(() => {
    construct()
  }, [])

  return (
    <div>
      <ConsultInfoLayout
        page={page}
        user={user}
        advisory={activity}
        fun={join}
      ></ConsultInfoLayout>
    </div>
  )
}

JoinAdvisory.defaultProps = {
  idA: 'A2',
  user: {
    name: 'JuanK',
    rol: 'Estudiante',
    img: "/image/profile_default.png"
  }
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