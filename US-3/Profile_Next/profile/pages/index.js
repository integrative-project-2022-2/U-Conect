import Head from 'next/head'
import styles from '../styles/profile.module.css'
import CategoryList from '../components/CategoryList'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Profile</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
      </Head>
      <div className={styles.name}>
        <div className={styles.img}>
         
        </div>
        <div className={styles.content}>
            <p className={styles.p-1}>Compañer@s: 3</p>
            <p className={styles.p-2}>Profesores: 3</p>
            <p className={styles.p-2}>Monitores: 3</p>
        </div>
    </div>

    <CategoryList items={["Jose Pedro","Mariana","Felipe"]} title = "Lista de contactos"></CategoryList>
    <CategoryList items={["COE1","APO1","FUTBOL"]} title = "Cursos"></CategoryList>
    <CategoryList items={["COE1","APO1","FUTBOL"]} title = "Grupos de estudio"></CategoryList>
    

    
    </div>
    
  )
}
