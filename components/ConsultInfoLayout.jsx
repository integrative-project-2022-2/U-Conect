import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Layout.module.css"
import { useState } from "react"
import { useEffect } from "react"

export default function ConsultInfoLayout({ page, user, advisory, fun }) {
  let table = {
    data: (advisory.participant)? advisory.participant:['Cargando...'] 
  }

  return (
    <div>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.desc} />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
      </Head>
      <header className={styles.header}>
        <div className={styles.button}>
          <Link href="/">
            <a><button type="button" className="btn btn-primary">Volver</button></a>
          </Link>
        </div>
        <div className={styles.right}>
          <label className={styles.label}>{user.name}</label>
          <label className={styles.label}>{user.rol}</label>
        </div>
        <div className={styles.imag}>
          <Image
            className="img-circle"
            src={user.img}
            height={50}
            width={50}
            alt="Profile"
          >
          </Image>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.info}>
          <div className={styles.block}>{advisory.name}</div>
          <h3>{advisory.name}</h3>
          <h5>Vista: {advisory.view}</h5>
          <h5>Fecha: {advisory.date}</h5>
          <h5>Hora: {advisory.start_hour} - {advisory.end_hour}</h5>
          <h5>Responsable: {advisory.manager}</h5>
          <h5>Materia: {advisory.subject}</h5>
          <h5>Tipo: {advisory.type}</h5>
          <h5>Medio: {advisory.means}</h5>
          <h5>Descripcion: <text>{advisory.description}</text></h5>
          <br /><br /><br />

          <button onClick={fun} className={styles.button}>INGRESAR A ASESORIA</button>
        </div>
        <div></div>
        <div className={styles.table}>
          <table className="table table-light">
            <thead className="thead-light">
              <tr><th scope="col">Participantes: </th></tr>
            </thead>
            <tbody>
              {table.data.map(e => (
                <tr>
                  <td className={styles.participantItem}>{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

ConsultInfoLayout.defaultProps = {
  title: "Pagina en progreso",
  desc: "Descripcion en progreso",
  name: "Nombre",
  rol: "ROL",
  value: ["Participante 1", "Participante 2", "Participante 3"]
}