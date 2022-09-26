import Head from 'next/head'
import styles from '../styles/profile.module.css'
import CategoryList from '../components/categoryList'
import Link from 'next/link'

export default function newGroup() {

  const l = ["Juanito", "JuanFe", "Jesus", "Rocio"]
  const borrar = () => {
    alert("Funcion activa")
  }

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

      {/* <CategoryList items={["Mariana", "Pedro", "Titi"]} title = "COE1"></CategoryList> */}

      <table>
        <thead>
          <th>
          <table className=''>
            {l.map((e) => (
              <tr onClick={borrar}>{e}</tr>
            ))}
          </table>
          </th>
          <th>
          <button className='btn btn-primary' onClick={borrar}>+</button>
          </th>
        </thead>
      </table>

      


    </div>

  )
}