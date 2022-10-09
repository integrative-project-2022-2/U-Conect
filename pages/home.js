import Head from "next/head";
import HomeLayout from "../components/HomeLayout"
import JoinConsole from "/pages/Counseling_Activities/JoinCounseling"

export default function home() {
  return (
    <div>
      <Head>
        <title>Pagina principal</title>
      </Head>
      <header>
        <HomeLayout>
          <JoinConsole/>
        </HomeLayout>
      </header>
    </div>
  )
}
