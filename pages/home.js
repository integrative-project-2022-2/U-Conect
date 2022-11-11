import React from "react"
import { useState } from "react"
import Head from "next/head"
import HomeLayout from "../components/HomeLayout"

import NuevoGrupo from "/pages/Counseling_Activities/grupo-JFCG"
import JoinAdvisory from "/pages/Counseling_Activities/JoinCounseling"
import RetireAdvisory from "/pages/Counseling_Activities/retireadvisory"
import UserStory5 from "/pages/Counseling_Activities/hu5"

export default function home() {

  const notifications1 = {

    notification: ["notificacion1", "notificacion2", "notificacion3"],
    fecha: "9/10/2022"
  };

  const [children, setChildren] = React.useState(null)
  const [button] = useState({
    name: [
      "Crear Nuevo Grupo",
      "Sebastian US",
      "Join to Advisory",
      "Leave Advisory"
    ],
    fun: [crearnuevogrupo, join, us5, join, leave]
  })

  function crearnuevogrupo() {
    setChildren(<NuevoGrupo />)
  }

  function join() {
    setChildren(<JoinAdvisory />)
  }

  function leave() {
    setChildren(<RetireAdvisory />)
  }

  function us5() {
    setChildren(<UserStory5 />)
  }

  return (
    <div>
      <Head>
        <title>Pagina Principal</title>
      </Head>
      <main>
        <HomeLayout notifications={notifications1} button={button}>
          {children}
        </HomeLayout>
      </main>
    </div>
  )
}
