import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/JFCG-botton.module.css'
import Chipa from '/components/JPA-Chipa.js'

export default function Home() {
  const mostrar = () => {
    alert("El grupo se ha creado exitosamente")
  }
  return (
    <div>
      <header className={styles.header}></header>

      <form>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet" />
        <title>Crear ASESORIA</title>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>



        <div class="mb-3">
          <b for="exampleInputEmail1" class="form-label">CREAR ASESORIA</b>
        </div>


        <div class="mb-3">
          <label for="Input-groupName" class="form-label">Nombre de asesoria</label>
          <input type="groupName" class="form-control" id="Input-groupName" />
        </div>

        <div class="mb-3">
          <label for="Input-groupName" class="form-label">Fecha de la asesoria</label>
          <input type="groupName" class="form-control" id="Input-groupName" />
        </div>

        <div class="mb-3">
          <label for="Input-groupName" class="form-label">Empieza a las</label>
          <input type="groupName" class="form-control" id="Input-groupName" />
        </div>

        <div class="mb-3">
          <label for="Input-groupName" class="form-label">Termina a las</label>
          <input type="groupName" class="form-control" id="Input-groupName" />
        </div>

        <div className="mb-3">
          <label for="Inputmanager" className="form-label">Selecciona el estado </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Estado</option>
            <option value="PUBLICO">PUBLICO</option>
            <option value="PRIVADO">PRIVADO</option>
          </select>
        </div>


        <div className="mb-3">
          <label for="Inputmanager" className="form-label">Tipo de asesoría</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Estado</option>
            <option value="PUBLICO">MONITORIA</option>
            <option value="PRIVADO">ASESORIA</option>
          </select>
        </div>

        <div className="mb-3">
          <label for="Inputmanager" className="form-label">Medio</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Estado</option>
            <option value="PUBLICO">PRESENCIAL</option>
            <option value="PRIVADO">VIRTUAL</option>
          </select>
        </div>

        <div className="mb-3">
          <label for="Inputmanager" className="form-label">Responsable</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Profesor y/o Monitor</option>
            <option value="Emily">Emily</option>
          </select>
        </div>


        <div className="mb-3">
          <label for="Input-subject" className="form-label">Selecciona una materia </label>
          <select className="form-select" aria-label="Default select example" name="subject">
            <option selected>Materia</option>
            <option value="10332">Proyecto integrador 1</option>
            <option value="10255">Inferencia estadística</option>
          </select>
        </div>



        <button type="submit" className="btn" id={styles.botoncito} onClick={() => mostrar()}>Aceptar</button>


      </form>
    </div>




  )
}