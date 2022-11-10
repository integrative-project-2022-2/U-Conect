import styles from '/styles/studySession.module.css'

export default function studyJs () {

    return (

        <section className={styles.headerPage}>

            <nav>
                <div class="nav-links">
                    <ul> 
                        <li>
                            <a href="">Crear espacio</a>
                        </li>
                        <li>
                            <a href="">Entrar</a>
                        </li>
                        <li>
                            <a href="">Espacios</a>
                        </li>
                        <li>
                            <a href="https://www.icesi.edu.co/moodle/login/index.php">Perfil
                            </a>
                        </li>
                        
                    </ul>

                </div>

                <div class="text-box2">
                
                    <div></div>

                    <div>
                        <h2>Ingresar fecha deseada para la reunion </h2>
                    </div>

                    <div></div>

                    <div class="select-box">
                        
                        <div class="option-container active">
                        
        
                            <div class="options">
                                <input type="radio" class="radio" id="Comunicación escrita I" name="category">
                                <label for="Comunicacion escrita I">Comunicacion escrita I </label>
                            </div>
                            
                            <div class="option">
                                <input type="radio" class="radio" id="Lógica y argumentación" name="category">
                                <label for="Lógica y argumentación">Lógica y argumentación </label>
                            </div>
        
                            <div class="option">
                                <input type="radio" class="radio" id="Álgebra y funciones" name="category">
                                <label for="Álgebra y funciones">Álgebra y funciones </label>
                            </div>
        
                            <div class="option">
                                <input type="radio" class="radio" id="Introducción a la Ingeniería de Sistemas" name="category">
                                <label for="Introducción a la Ingenieria de sistemas">Introducción a la Ingenieria de sistemas </label>
                            </div>
        
                            <div class="option">
                                <input type="radio" class="radio" id=" Organizaciones" name="category">
                                <label for="Organizaciones">Organizaciones </label>
                            </div>
        
                            <div class="option">
                                <input type="radio" class="radio" id="Fundamentos de Derecho Constitucional" name="category">
                                <label for="Fundamentos de Derecho Constitucional">Fundamentos </label>
                            </div>
                        </div>

                        <div class="selected">
                            <h6>Selecciona la clase para la monitoria </h6>
                        </div>

                    </div> 

                    <div class="select-box">

                        <div class="selected2">
                            <h6>Selecciona la momentaniedad de la monitoria </h6>
                        </div>

                        <div class="option-container2">
                            <div class="option">
                                <input type="radio" class="radio" id="Semanal" name="category">
                                <label for="Semanal">Semanal </label>
                            </div>

                            <div class="option">
                                <input type="radio" class="radio" id="Mensual" name="category">
                                <label for="Mensual">Mensual </label>
                            </div>

                            <div class="option">
                                <input type="radio" class="radio" id="Bi-semanal" name="category">
                                <label for="Bi-semanal">Bi-semanal </label>
                            </div>

                        </div>

                    </div>

                    <input class="controls" type="datetime-local" name="" id="ingresarDate"> 

                    <div></div>

                    <input class="buttons" type="submit" value="ingresar">

                </div>

            </nav>

        </section>

    )
}
