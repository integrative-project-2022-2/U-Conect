import styles from '../styles/editProfile.module.css'

function Home(props){
    return (
      <div>
    
        <div className={styles.main_container}>
            <div className={styles.profilee}>
                <div className={styles.profileInfo}></div>
                <img src="https://valledellili.org/wp-content/uploads/2018/04/convenio-icesi-1.jpg" alt="" className={styles.profile_cover}></img>
                <div className={styles.profile_menu}>
                <div className={styles.profile_avatar}>
                <img className={styles.profile_img} src="https://img.freepik.com/vector-gratis/hombre-muestra-gesto-gran-idea_10045-637.jpg?w=2000" alt=""></img>
                <label className={styles.profile_name}>Juan Felipe Castillo</label>
                </div>
                <div className={styles.menu_item}>
                    <a className={styles.pr_it}>Main</a>
                    <a className={styles.pr_it}>Grupos</a>
                    <a className={styles.pr_it}>About</a>
                </div>
                
                </div>
            </div>
         </div>

         <div className={styles.Materias}>
            <a className={styles.titleee}>Materias</a>
            <p></p>
            <a className={styles.pr_it}>Algebra y Funciones</a>
            <a className={styles.pr_it}>Proyecto Integrador I</a>
            <a className={styles.pr_it}>Inferencia Estadistica</a>

            <p></p>
            <select >
                <option></option>
                <option>Calculo de varias</option>
                <option>Ingenieria de Software</option>
                <option>CED II</option>
                <option>Modelado</option>
                <option>Bases de datos</option>
                <option>Ingenieria economica</option>
                <option>Contabilidad</option>
                <option>Ingenieria de procesos</option>
                <option>CED III</option>
                <option>Informatica Teorica</option>
                <option>Fisica y laboratorio</option>
            </select>
         </div>
         <button>Agregar</button>
    </div>
        
        
      
    )
  }
  
  export default Home;