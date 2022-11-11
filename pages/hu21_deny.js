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
              <label> Solicitudes Asesoria </label>
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
  calendar:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FBogota&showTitle=0&src=c2FudGlhZ29jYXJkZW5hc21vbnRlc0BnbWFpbC5jb20&src=NGNhOWI0MmJlMGIxYzE1Mjk0MzcxOWI0NTRiMzc4YmYwMTBlY2QyNTJiZmFmMmEyM2Y0MzA5NWU0YTg1MzM4NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZXMuY28jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA0MDE3ODc0NDU2ODc4NzM2MTYyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23D81B60&color=%2333B679&color=%230B8043&color=%230047a8" , 
}}
}



