import styles from '/styles/Home21.module.css'

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
              <profile> <img src="perfil.PNG" width="75" /> </profile>
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
                            <label> Tipo: Monitoria</label>
                        </li>
                        <li>
                            <label> Eventualidad: mensual</label>
                        </li>
                        <li>
                            <label> Fecha: 11 de noviembre del 2022</label>
                        </li>
                        <li>
                            <label> Hora: 4:00 pm - 6:00 pm</label>
                        </li>
                        <li>
                            <label> Medio: precencial salon 203C</label>
                        </li>
                    </ul>
                </a> 

            </div>

            
            <div className={styles.diva3}>
                <a>
                    <label> Participantes </label>
                        <ul className={styles.invitationInfoTitle}>
                            <li>
                                <label> SantiagoCardenas</label>
                            </li>
                        </ul>
                    </a> 
            </div>
            
        </div>


    </div>
       
    )
  }
  
  export default Monitoria