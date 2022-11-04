import styles from '../styles/Home.module.css'

function Monitoria() {
    return (
    <div id="container">
        <div className={styles.invitationContainer}>
            
            <div className={styles.gridSearch}>
              <a  className={styles.block}> 
                <section> <img src="/icesi.JPG" width="200" /> </section>                            
              </a>      

              <a className={styles.block}>        
                <searchbar>
                  <input type="text" id="search" placeholder="Search People" autoComplete="off"  size="100"/> 
                </searchbar>
              </a>

              <a  className={styles.block}>
              <profile> <img src="perfil.png" width="75" /> </profile>
              </a>
            </div>   

            <div className={styles.diva2}>
                <a className={styles.invitationInfoImg}>
                    <img id= "img1" src="/studygroup.jpeg" width="100" height="80" position="center"/>
                </a>

                <a>
                    <label> Grupo de estudio </label>
                    <ul className={styles.invitationInfoTitle}>
                        <li>
                            <label> Vista: publica</label>
                        </li>
                        <li>
                            <label> Nombre: Monitoria Calculo</label>
                        </li>
                        <li>
                            <label> Tipo de asesoria: Monitoria</label>
                        </li>
                        <li>
                            <label> Fecha: 24 de octubre del 2022</label>
                        </li>
                        <li>
                            <label> Hora: 6:00 pm - 10:00 pm</label>
                        </li>
                        <li>
                            <label> Responsable: Felipe Perez</label>
                        </li>
                        <li>
                            <label> Medio: precencial salon 105D</label>
                        </li>
                        <li>
                            <label> Descripcion: monitoria de calculo para repasar para el parcial final</label>
                        </li>
                    </ul>
                </a> 

            </div>

            
            <div className={styles.diva3}>
                <a>
                    <label> Participantes </label>
                        <ul className={styles.invitationInfoTitle}>
                            <li>
                                <label> Felipe perez</label>
                            </li>
                            <li>
                                <label> Juan Pablo</label>
                            </li>
                            <li>
                                <label> Maria paula</label>
                            </li>
                        </ul>
                    </a> 
            </div>
            
        </div>


    </div>
       
    )
  }
  
  export default Monitoria
  