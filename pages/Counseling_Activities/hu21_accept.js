import Head from 'next/head'
import styles from '/styles/Home21.module.css'

export default function Home() {
  return (
   
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main className={styles.main}>

      <div id="container">

       <div className={styles.diva1}>
      
       <gear>
            <img id= "img1" src='gearIcon.png' width="70" height="70"/>
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
         <iframe className={styles.calendar} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&showTitle=0&src=am9rZXJmZXZlcnByb0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZXMuY28jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043" > </iframe>
        </a>
      </div>

      
    </main>
  </div>
  
  )
}



