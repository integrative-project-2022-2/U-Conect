import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({calendar,monitoria}) {
  return (
   
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main className={styles.main}>

      <div id="container">

       <div className={styles.diva1}>
      
       <gear>
            <img id= "img1" src="gearIcon.png" width="70" height="70"/>
          </gear>

      
          <div className={styles.btplacer2}>
            <h1>
              <label> Notificaciones </label>
            </h1>
          </div> 
        </div>

        <div className={styles.title}>
            Mi calendario
          </div>

        <a>
         <iframe className={styles.calendar} src={calendar} > </iframe>
        </a>
      </div>

      
    </main>
  </div>
  
  )
}

export const getServerSideProps = async (context) => {
return { props: { 
  calendar:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FBogota&src=c2FudGlhZ29jYXJkZW5hc21vbnRlc0BnbWFpbC5jb20&src=ZXMuY28jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043" , 
}}
}



