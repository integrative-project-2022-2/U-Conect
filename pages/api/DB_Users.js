import {register,editar,consultar,borrar} from "/models/reg_users";

async function users (req, res){
   console.log(req.body.name, req.body.username, req.body.email, req.body.password_user, req.body.role)
   //register(req.body.name, req.body.username, req.body.email, req.body.password_user, req.body.role)
   //editar(req.body.email, req.body.username)
   borrar(req.body.username)
   res.redirect("http://localhost:3000")
}

export default users;