import React, { useState } from 'react'
import Layout from "/components/GroupLayout"
import Head from 'next/head'

import Group from "/pages/Counseling_Activities/group"
import NewGroup from "/pages/Counseling_Activities/newGroup"


export default function createNewGroups() {
    const [children, setChildren] = React.useState(<NewGroup/>)
    const [button, setButton] = useState({
        name: "Grupos de Estudio",
        fun: [groupPage]
    })
    const [groups, setGroups] = React.useState({
        grp: [{
          subject: "Computacion II",
          student: ["JuanK", "JuanFe", "Jesus"]
        },
        {
          subject: "Proyecto I",
          student: ["JuanK", "JuanFe", "Jesus", "JuanJo"]
        }
        ]
      })


    function groupPage(){
        setChildren(<Group
            tit={"Grupos de Estudio"}
            grps={groups.grp}
        ></Group>)
        setButton({
            name: "Nuevo grupo de estudio",
            fun:[newGroupPage]
         })
    }

    function newGroupPage(){
        setChildren(<NewGroup></NewGroup>)
        setButton({
            name: "Grupos de Estudio",
            fun:[groupPage]
         })
    }



    return (
        <div>
            <Head>
                <title></title>
            </Head>
            <Layout
                button={button}
            >{children}</Layout>
        </div>
    )
}