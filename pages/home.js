import React from "react"
import { useState } from "react"
import HomeLayout from "../components/HomeLayout"
import JoinCounseling from "/pages/Counseling_Activities/JoinCounseling"

export default function home() {


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
      <HomeLayout
      button = {button}
      >
        {children}
      </HomeLayout>
    </div>
  )
}
