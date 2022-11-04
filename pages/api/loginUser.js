import {consult} from "/models/users_manage";

async function loginUser(req, res){
    let user = consult(req.body.username, req.body.password);
    res.send(user)
}

export default loginUser;
