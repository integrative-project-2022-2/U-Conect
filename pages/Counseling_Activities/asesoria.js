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

        <div className="mb-3">
          <label for="Inputmanager" className="form-label">Selecciona una materia </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Materia</option>
            <option value="1">Algebra y funciones</option>
            <option value="2">COE1</option>
            <option value="3">Organizaciones</option>
          </select>
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Integrantes </label>
          <Chipa></Chipa>
        </div>

        <div className="mb-3">
          <label for="Inputmanager" className="form-label">Selecciona el estado </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Estado</option>
            <option value="PUBLICO">PUBLICO</option>
            <option value="PRIVADO">PRIVADO</option>
          </select>
        </div>


        {/* <div className="mb-3">
  <label for="InputgroupId" className="form-label">ADICIONALES</label>
</div>
<div className="mb-3">
  <label for="InputgroupId" className="form-label">Codigo de grupo </label>
  <input type="groupId" className="form-control" />
</div>
<div className="mb-3">
  <label for="Inputmanager" className="form-label">Profesor </label>
  <input type="manager" className="form-control" />
</div>
<div className="mb-3">
  <label for="Input-owner_id" className="form-label">Propietario del grupo </label>
  <input type="owner_id" className="form-control" />
</div> */}

        <button type="submit" className="btn" id={styles.botoncito} onClick={() => mostrar()}>Aceptar</button>


      </form>
    </div>




  )
}