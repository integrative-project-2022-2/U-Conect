import {register} from "/models/users_manage";

async function registerUser (req, res){
      register(req.body.name, req.body.username, req.body.email, req.body.password, "ESTUDIANTE");
      res.send(true)
    
}


export default registerUser;
