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
            <p className={styles.p-1}>Fulanito Garcia</p>
            <p className={styles.p-2}>Rol: Monitor</p>
            <p className={styles.p-2}>Centro apoyo al que pertenece</p>
            <p className={styles.p-2}>Numero de oficina:</p>
            <p className={styles.p-2}>Correo electronico:</p>
            <p className={styles.p-2}>Telefono:</p>
        </div>
    </div>

    <CategoryList items={["COE1","APO1","FUTBOL"]} title = "Materias a las que brinda apoyo">Otra cosa</CategoryList>
    <CategoryList items={["COE1","APO1","FUTBOL"]} title = "Materias cursadas">Algo</CategoryList>
    

    <div className={styles.info}>
        <p className={styles.title}>Disponibilidad horaria:</p>
        <div className={styles.img}>
        </div>
    </div>
    </div>
    
  )
}
