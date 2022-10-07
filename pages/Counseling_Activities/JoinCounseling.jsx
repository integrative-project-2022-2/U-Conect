import ConsultInfoLayout from "../../components/ConsultInfoLayout";

let page = {
  title: "Ingresando a Asesoria",
  desc: "Aqui puedes ingresar a una asesoria"
}

let student = {
  name: "Juan Camilo Ramirez Tabares",
  rol: "Estudiante",
  img: "/image/profile_default.png"
}

let counseling = {
  name: "Primer Entrega de Producto",
  subject: "Proyecto Integrador I",
  view: "Publica",
  type: "Asesoria",
  date: "10 de Octubre del 2022",
  hour: "6:00 P.M.",
  manager: "Rocio Emilia Segovia",
  means: "Presencial",
  desc: "Entrega de la primera version del producto minimo viable para Proyecto Integrador I",
  participants: ["Profesor@", "Juan", "Jesus", "JuanFe", "Kathe", "Cristian", "Sebastian", "Gabriel", "JuanJo"]
}

function join(){
  if(counseling.view == "Publica"){
    counseling.participants.push(student.name)
    alert(counseling.participants)
  }
}

export default function JoinCounseling() {
  return (
    <div>
      <ConsultInfoLayout
        page={page}
        student={student}
        counseling={counseling}
        fun={join}
      > </ConsultInfoLayout>
    </div>
  )
}
