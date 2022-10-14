import styles from '/styles/profile2.module.css'

  function Home(props){
  return (
    <div>
      <div className={styles.header}></div>
      
      <div className={styles.wrapper}>
      <div className={styles.leftt}>
        <div className={styles.sep}>
          <a>Inicio</a>
          <p></p>
          <a>Perfil</a>
          <p></p>
          <a>Amigos</a>
          <p></p>
          <a>Invitaciones</a>
          <p></p>
          <a>Grupos</a>
        </div>
        -------------------------------------------------
        <div className={styles.side_wrapper}>
            <div className={styles.sep}>
              <div className={styles.titlee}><b>Amigos</b></div>
              <div className={styles.user}>
                <img className={styles.user_img} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt=""></img>
                <div className={styles.user_name}>Juan felipe</div>
              </div>
              <div className={styles.user}>
                <img className={styles.user_img} src="https://pbs.twimg.com/profile_images/737221709267374081/sdwta9Oh.jpg" alt=""></img>
                <div className={styles.user_name}>Camilo Fernandez</div>
              </div>
              <div className={styles.user}>
                <img className={styles.user_img} src="https://pbs.twimg.com/profile_images/2452384114/noplz47r59v1uxvyg8ku.png" alt=""></img>
                <div className={styles.user_name}>Cristian Lopez</div>
              </div>
              
              <div className={styles.user}>
                <img className={styles.user_img} src="https://images.unsplash.com/photo-1575084713138-342cae5f8d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80" alt=""></img>
                <div className={styles.user_name}>Carlos Uribe</div>
              </div>
              <button className={styles.button}>Ver mas</button>
            </div>
          </div> 
          <hr></hr>
          <div className={styles.wrapper}>
          <div className={styles.sep}>
          <div className={styles.titlee}><b>Materias</b></div>
          <div className={styles.user}>
                <img className={styles.user_img} src="https://conceptodefinicion.de/wp-content/uploads/2020/05/calculo.jpg" alt=""></img>
                <div className={styles.user_name}>Calculo de varias</div>
              </div>
              <div className={styles.user}>
                <img className={styles.user_img} src="https://mediaesfera.com/wp-content/uploads/2014/08/940458_54686734.jpg" alt=""></img>
                <div className={styles.user_name}>Proyecto Integrador</div>
              </div>
              <div className={styles.user}>
                <img className={styles.user_img} src="https://economia.org/anexo/contabilidad-basica-1.jpg" alt=""></img>
                <div className={styles.user_name}>Contabilidad</div>
              </div>
              
              <div className={styles.user}>
                <img className={styles.user_img} src="https://graffica.info/wp-content/uploads/2020/09/200903-graffica-aaron-martinez-1-1024x627.jpg" alt=""></img>
                <div className={styles.user_name}>Modelado</div>
              </div>
              <button className={styles.button}>Ver mas</button>

          </div>
          </div>
      </div>

      <div className={styles.main_container}>
        <div className={styles.profilee}>
          <div className={styles.profileInfo}></div>
          <img src="https://valledellili.org/wp-content/uploads/2018/04/convenio-icesi-1.jpg" alt="" className={styles.profile_cover}></img>
          <div className={styles.profile_menu}>
            <div className={styles.profile_avatar}>
            <img className={styles.profile_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNGcjZpg5FYS5e8Hvd6KFjdNJs761B1q7UQ&usqp=CAU" alt=""></img>
             <label className={styles.profile_name}>Jesus Garces</label>
            </div>
            <div className={styles.menu_item}>
              <a className={styles.pr_it}>Main</a>
              <a className={styles.pr_it}>Eventos</a>
              <a className={styles.pr_it}>Grupos</a>
              <a className={styles.pr_it}>About</a>
            </div>
            <div className={styles.follow_buttons}>
             <button className={styles.follow}>Follow</button>
             <label>0</label>
             
            </div>
          </div>
        </div>
      </div>
      </div>
  
    </div>
    )
}

export default Home;