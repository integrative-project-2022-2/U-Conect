import styles from '/styles/studySession.module.css'

export default function studyJs () {

    return ( 
        <div className={styles.mainContainer}>
            <section className={styles.headerPage}>

                <nav>
                    <div className={styles.nav_links}>
                        <ul> 
                            <li><a href="file:///C:/Users/juanp/OneDrive/Escritorio/studySesions/studySession2.js">Crear sala</a></li>
                            <li><a href="file:///C:/Users/juanp/OneDrive/Escritorio/studySesions/index3.html">Crear espacio</a></li>
                            <li><a href="file:///C:/Users/juanp/OneDrive/Escritorio/studySesions/index4.html">Entrar</a></li>
                            <li><a href="file:///C:/Users/juanp/OneDrive/Escritorio/studySesions/index5.html">Espacios</a></li>
                            <li><a href="https://www.icesi.edu.co/moodle/my/">Perfil</a>
                            </li>       
                        </ul>

                    </div>

                </nav>

                <div className={styles.text_box}>
                    <h1>Sistema de agregar salas de estudio</h1>
                    <p>Para agregar una sala de estudio, debe estar disponible el espacio y contar con el tiempo en el rango escogido.
                    </p>
                    <a href="https://www.icesi.edu.co/biblioteca/">Visita la biblioteca para mas informacion</a>
                </div>

            </section>



        </div>
    )

}