import Head from 'next/head'
import styles from '../styles/profile.module.css'
import CategoryList from '../components/CategoryList.js'
import Link from 'next/link'
import Transfer from '../components/Transfer_list'
import Botton from '../components/Botton'

export default function newGroup() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>New Group</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
      </Head>
      <div className={styles.name}>

        <div className={styles.content}>
          <p className={styles.p - 1}>NUEVO GRUPO</p>
          <Link href="/">
            <button className='btn btn-primary'>Aceptar</button>
          </Link>
        </div>
      </div>


      <Botton></Botton>
      <Transfer></Transfer>




    </div>

  )
}
