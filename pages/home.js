import React from "react"
import { useState } from "react"
import HomeLayout from "../components/HomeLayout"
import Head from "next/head"

import JoinAdvisory from "/pages/Counseling_Activities/JoinCounseling"
import RetireAdvisory from "/pages/Counseling_Activities/retireadvisory"
import UserStory5 from "/pages/Counseling_Activities/hu5"

export default function home() {
  const [children, setChildren] = React.useState(null)
  const [button] = useState({
    name: [
      "New Group",
      "Sebastian US",
      "Join to Advisory",
      "Leave Advisory"
    ],
    fun: [join, us5, join, leave]
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

  return (
    <div>
      <Head>
        <title>Pagina Principal</title>
      </Head>
      <aside>
        <HomeLayout
          button={button}
        >
          {children}
        </HomeLayout>
      </aside>
    </div>
  )
}
