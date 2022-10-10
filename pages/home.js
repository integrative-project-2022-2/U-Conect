import Head from "next/head";
import HomeLayout from "../components/HomeLayout"
import JoinConsole from "/pages/Counseling_Activities/JoinCounseling"

const notifications1 = {

  notification: ["notificacion1","notificacion2","notificacion3"],
  fecha: "9/10/2022"

};

export default function home() {
  return (
    <div>
      <Head>
        <title>Pagina principal</title>
      </Head>
      <header>
        <HomeLayout notifications={notifications1}>
          <JoinConsole/>
        </HomeLayout>
      </header>
    </div>
  )
}
