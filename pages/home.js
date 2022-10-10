import React from "react"
import { useState } from "react"
import Head from "next/head"
import HomeLayout from "../components/HomeLayout"
import JoinCounseling from "/pages/Counseling_Activities/JoinCounseling"

export default function home() {

  const notifications1 = {

    notification: ["notificacion1","notificacion2","notificacion3"],
    fecha: "9/10/2022"
  
  };

  const [children, setChildren] = React.useState(null)
  const [button] = useState({
    name: [
      "New Group",
      "Join to Advisory",
      "Leave Advisory"
    ],
    fun: [join]
  })

  function join(){
    setChildren(<JoinCounseling/>)
  }

  return(
    <div>
      <Head>
        <title>Pagina principal</title>
      </Head>
      <header>
        <HomeLayout notifications={notifications1} button = {button}>
        {children}
        </HomeLayout>
      </header>
    </div>
  )
}
