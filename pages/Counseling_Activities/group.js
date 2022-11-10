import Head from 'next/head'
import styles from '/styles/profile.module.css'
import CategoryList from '/components/CategoryList.js'
import { useState } from 'react'

export default function group(tit, grps) {
  const [groups, setGroups] = useState({
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

  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>{tit}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
      </Head>
      {groups.grp.map(e => (
        <CategoryList items={e.student} title={e.subject}></CategoryList>
      ))}
    </div>
  )
}