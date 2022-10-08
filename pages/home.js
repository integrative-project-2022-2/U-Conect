import Head from "next/head";
import Notification from "../components/Notification"

export default function home() {
  return (
    <div>
      <Head>
        <title>Pagina principal</title>
      </Head>
      <header>
        <Notification/>
      </header>
    </div>
  )
}
