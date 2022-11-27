import styles from '../styles/editProfile.module.css'
import { useState } from 'react'

export default function MeteriasList(){

    const [name,setName] = useState("UserName")
    const [title,setTitle] = useState("Materia");
    const [todos,setTodos] = useState([]);
    let x = 0;

    function getUserName(userName){
        setName(userName)
    }

    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: +new Date(),
            title: title,
        }

        const temp = [... todos];
        temp.unshift(newTodo);

        setTodos(temp);
    }

    function handlerChanger(event){
        const value = event.target.value;

        setTitle(value);
    }

    return(
        <div>
            <div className={styles.main_container}>
                <div className={styles.profilee}>
                    <div className={styles.profileInfo}></div>
                    <img src="https://valledellili.org/wp-content/uploads/2018/04/convenio-icesi-1.jpg" alt="" className={styles.profile_cover}></img>
                    <div className={styles.profile_menu}>
                    <div className={styles.profile_avatar}>
                    <img className={styles.profile_img} src="https://us.123rf.com/450wm/imagevectors/imagevectors1606/imagevectors160600380/59162629-icono-de-perfil-blanco-en-el-bot%C3%B3n-negro-aislado-en-blanco.jpg?ver=6" alt=""></img>
                    <label className={styles.profile_name}>{name}</label>
                    </div>
                    <div className={styles.menu_item}>
                        <a className={styles.pr_it}>Main</a>
                        <a className={styles.pr_it}>Grupos</a>
                        <a className={styles.pr_it}>About</a>
                    </div>
                    
                    </div>
                </div>
         </div>
         
            <a className={styles.titleee}>Materias</a>
            
            <p></p>

            <div>
                {todos.map((item) => {
                    return(
                        <div key={item.id} >{item.title}</div>
                    )
                
                    })}
            </div>

            <p></p>
            
            <form className={styles.todoCreateForm} onSubmit={handleSubmit}>
                <input className={styles.todoInput} onChange={handlerChanger} value={title}/>
                <input type="submit" value="agregar" className={styles.buttonCreate} onClick={handleSubmit}/>
                <p></p>
                <select value={title} id="select"  onChange={handlerChanger}>
                    <option>Coe</option>
                    <option>Math</option>
                </select>
            </form>
           
        </div>
    )
}