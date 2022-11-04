import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <form action="http://localhost:3000/api/DB_Users" method="POST">
      <input type="text" placeholder='Nombre' name="name"/>
      <input type="text" placeholder='Nombre de usuario' name="username"/>
      <input type="text" placeholder='email' name="email"/>
      <input type="text" placeholder='password' name="password_user"/>
      <input type="text" placeholder='role' name="role"/>
      <button type = "submit">Enviar</button>
    </form>
  )
}
