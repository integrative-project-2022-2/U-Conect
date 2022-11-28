import {register,editar,consultar,borrar} from "/models/JFCG-reg_sgroup";

async function sgroup (req, res){
   console.log(req.body.groupId, req.body.ownerId, req.body.groupName, req.body.subject, req.body.quantityOfStudents, req.body.state)
   register(req.body.groupId, req.body.ownerId, req.body.groupName, req.body.subject, req.body.quantityOfStudents, req.body.state)
   //editar(req.body.email, req.body.username)
   //borrar(req.body.username)
   res.redirect("http://localhost:3000")
}

export default sgroup;