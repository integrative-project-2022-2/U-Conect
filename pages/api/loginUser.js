import {consult} from "/models/users_manage";

async function loginUser(req, res){
    consult(req.body.username, req.body.password, (response) => {
        console.log(response)
        res.send(response.toString())
    });

}

export default loginUser;