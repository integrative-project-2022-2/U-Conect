import Head from 'next/head'
import Link from 'next/link'
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
            <img id= "img1" src="gearIcon.png" width="70" height="70"/>
          </gear>

      
          <div className={styles.btplacer2}>
            <h1>
              <label> Solicitudes Asesoria </label>
              <div id="invitacion1" className={styles.btplacer}>
                <ul>
                  <li>
                    <form action="http://localhost:3000/api/DB_Controller2_HU21" method="POST">
                      <Link href="Counseling_Activities/monitoria">
                        <a className={styles.invitationTitle} title="Ver mas informacion"> Invitación a grupo #1 </a> 
                      </Link>        
                        <input type="hidden" name ="usernameTemp" value="SantiagoCardenas" autoComplete="off"  size="1"/>         
                        <input type="hidden" name ="groupIdTemp" value="1" autoComplete="off"  size="1"/>         
                        
                          <input className={styles.btcss} id="bt1" type="submit" value="Aceptar"/>
                
                      </form>
                      
                    <form action="http://localhost:3000/api/DB_ControllerHU21" method="POST">
                        <input type="hidden" name ="groupIdTemp2" value="1" autoComplete="off"  size="1"/>           
                        <input  className={styles.btcss} id="bt2" type="submit" value="Rechazar"/>
                    </form>
                  </li>
                </ul>   
              </div>
            </h1>
          </div> 
        </div>

        <div className={styles.title}>
            Mi calendario
          </div>

        <a>
         <iframe className={styles.calendar} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FBogota&showTitle=0&src=c2FudGlhZ29jYXJkZW5hc21vbnRlc0BnbWFpbC5jb20&src=NGNhOWI0MmJlMGIxYzE1Mjk0MzcxOWI0NTRiMzc4YmYwMTBlY2QyNTJiZmFmMmEyM2Y0MzA5NWU0YTg1MzM4NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZXMuY28jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA0MDE3ODc0NDU2ODc4NzM2MTYyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23D81B60&color=%2333B679&color=%230B8043&color=%230047a8" > </iframe>
        </a>
      </div>

      
    </main>
  </div>
  
  )
}