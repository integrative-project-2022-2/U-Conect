import Head from 'next/head'
import styles from '../styles/profile.module.css'
import CategoryList from '../components/categoryList'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Profile</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
      </Head>
      <div className={styles.name}>

        <div className={styles.content}>
            <p className={styles.p-1}>NUEVO GRUPO</p>
            <Link href="/">
              <button>Aceptar</button>
            </Link>
        </div>
      </div>
  
    {/* <CategoryList items={["Mariana", "Pedro", "Titi"]} title = "COE1"></CategoryList> */}

    <CategoryList items={["Mariana", "Pedro", "Titi"]} title = "COE1"></CategoryList>

    
    </div>
    
  )
}
