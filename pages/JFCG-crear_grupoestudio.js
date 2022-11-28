import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/JFCG-botton.module.css'
import Chipa from '/components/JFCG-Chipa'

export default function Home() {
  const mostrar=()=>{
    alert("El grupo se ha creado exitosamente")
  }
  return (
    
    <form action="http://localhost:3000/api/JFCG-DB_Groups" method="POST">

      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet" />
      <title>Crear grupo</title>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>

      <div class="mb-3">
        <b for="title" class="form-label">CREAR NUEVO GRUPO DE ESTUDIO</b>
      </div>

      <div class="mb-3">
        <label for="Input-groupId" class="form-label">Numero del Grupo</label>
        <input type="number" class="form-control"  name="groupId"/>
      </div>

      <div class="mb-3">
        <label for="Input-ownerId" class="form-label">Propietario</label>
        <input type="text" class="form-control" name="ownerId"/>
      </div>


      <div class="mb-3">
        <label for="Input-groupName" class="form-label">Nombre del grupo</label>
        <input type="text" class="form-control"  name="groupName"/>
      </div>

      <div className="mb-3">
        <label for="Input-subject" className="form-label">Selecciona una materia </label>
        <select className="form-select" aria-label="Default select example" name="subject">
          <option selected>Materia</option>
          <option value="10332">Proyecto integrador 1</option>
          <option value="10255">Inferencia estadística</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="Input-quantityOfStudents " class="form-label">Cantidad de integrantes</label>
        <input type="number" class="form-control"  name="quantityOfStudents"/>
      </div>

      {/* <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Integrantes </label>
        <Chipa></Chipa>
      </div> */}

      <div className="mb-3">
        <label for="Input-select" className="form-label">Selecciona el estado </label>
        <select className="form-select" aria-label="Default select example" name="state">
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

      <button type="submit" className="btn" id={styles.boton} onClick={()=>mostrar()}>Aceptar</button>


    </form>


  )
}