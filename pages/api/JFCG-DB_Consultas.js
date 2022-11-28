import {register,register_integrants,editar,consultar,borrar} from "/models/JFCG-reg_sgroup";

async function users (req, res){
   const data = await consultar('USERS')
   //editar(req.body.email, req.body.username)
   //borrar(req.body.username)
   res.json(data)
}

export default users;