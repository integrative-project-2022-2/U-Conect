import {register,register_integrants,editar,consultar,borrar} from "/models/JFCG-reg_sgroup";
import {data} from "/models/ChipaData";;
import {useEffect, useState} from 'react'

async function sgroup (req, res){
   console.log(req.body.groupId, req.body.ownerId, req.body.groupName, req.body.subject, req.body.quantityOfStudents, req.body.state)

   register(req.body.groupId, req.body.ownerId, req.body.groupName, req.body.subject, req.body.quantityOfStudents, req.body.state)
   
   // const [datos, setDatos] = useState([''])
   // useEffect(() => {
   //    setDatos(data)
   // }, [])
   // console.log('Esto es: ' + datos)

   // data = data.split(',')
   // data.map(e => (
   //    register_integrants(req.body.groupId, e)
   // ))

   //editar(req.body.email, req.body.username)
   //borrar(req.body.username)
   res.redirect("http://localhost:3000")
}

export default sgroup;