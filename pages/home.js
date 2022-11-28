import React from "react"
import { useState } from "react"
import Head from "next/head"
import HomeLayout from "../components/HomeLayout"

import NewGroup from "/pages/Counseling_Activities/createNewGroups"
import JoinAdvisory from "/pages/Counseling_Activities/JoinAdvisory"
import RetireAdvisory from "/pages/Counseling_Activities/retireadvisory"
import UserStory5 from "/pages/Counseling_Activities/hu5"
import UserStoryJesusGarces from "/pages/Counseling_Activities/Profile2"
import Schedule from "/pages/Counseling_Activities/schedule"

export default function home() {

  const user = {
    name: 'JuanK',
    rol: 'Profesor',
    img: "/image/profile_default.png"
  }

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
      "Show Profile"
    ],
    fun: [newG, sched, us5, join, leave, showP]
  })

  function newG() {
    setChildren(<NewGroup />)
  }

  function join() {
    setChildren(<JoinAdvisory idA={'A1'} user={user}/>)
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
