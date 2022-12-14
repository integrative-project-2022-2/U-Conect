import React from "react"
import { useState } from "react"
import Head from "next/head"
import HomeLayout from "../components/HomeLayout"

import NewGroup from "/pages/Counseling_Activities/newGroup"
import AsesoriaG from "/pages/Counseling_Activities/asesoria"
import JoinAdvisory from "/pages/Counseling_Activities/JoinCounseling"
import RetireAdvisory from "/pages/Counseling_Activities/retireadvisory"
import UserStory5 from "/pages/Counseling_Activities/hu5"
import UserStoryJesusGarces from "/pages/Counseling_Activities/Profile2"
import Schedule from "/pages/Counseling_Activities/schedule"
import Home21 from "/pages/Counseling_Activities/home21"


export default function home() {

  const notifications1 = {

    notification: ["notificacion1", "notificacion2", "notificacion3"],
    fecha: "9/10/2022"
  };

  const path = {
    profile: "/image/profilePicture.jpeg",
    path: "/image/Logo.png"
  } 

  const [children, setChildren] = React.useState(null)
  const [button] = useState({
    name: [
      "New Group",
      "Schedule",
      "Join to Group",
      "Join to Advisory",
      "Leave Advisory",
      "Show Profile",
      "Accept/Deny Profesor",
      "Create Advisory"
    ],
    fun: [newG, sched, us5, join, leave, showP, acceptProfesor, asesori]
  })

  function newG() {
    setChildren(<NewGroup />)
  }

  function join() {
    setChildren(<JoinAdvisory id={'A1'}/>)
  }

  function leave() {
    setChildren(<RetireAdvisory />)
  }

  function us5() {
    setChildren(<UserStory5 />)
  }

  function showP(){
    setChildren(<UserStoryJesusGarces />)
  }

  function sched(){
    setChildren(<Schedule />)
  }

  function acceptProfesor(){
    setChildren(<Home21 />)
  }

  function asesori(){
    setChildren(<AsesoriaG />)
  }
  
  


  return (
    <div>
      <Head>
        <title>Pagina Principal</title>
      </Head>
      <main>
        <HomeLayout notifications={notifications1} button={button} image={path}>
          {children}
        </HomeLayout>
      </main>
    </div>
  )
}
