import React from "react"
import { useState } from "react"
import Head from "next/head"
import HomeLayout from "../components/HomeLayout"

import JoinAdvisory from "/pages/Counseling_Activities/JoinCounseling"
import RetireAdvisory from "/pages/Counseling_Activities/retireadvisory"
import UserStory5 from "/pages/Counseling_Activities/hu5"
import Profile from "/pages/Counseling_Activities/profile"

export default function home() {

  const notifications1 = {

    notification: ["notificacion1", "notificacion2", "notificacion3"],
    fecha: "9/10/2022"
  };

  const [children, setChildren] = React.useState(null)
  const [button] = useState({
    name: [
      "New Group",
      "Sebastian US",
      "Join to Advisory",
      "Leave Advisory",
      "Profile"
    ],
    fun: [join, us5, join, leave, openProfile]
  })

  function join() {
    setChildren(<JoinAdvisory />)
  }

  function leave() {
    setChildren(<RetireAdvisory />)
  }

  function us5() {
    setChildren(<UserStory5 />)
  }

  function openProfile() {
    setChildren(<Profile />)
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
