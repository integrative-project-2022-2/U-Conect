import {addEvent} from "../../models/addEvent"

async function addEvents (req, res){
    console.log(req.body.usernameTemp, req.body.groupIdTemp)
    addEvent(req.body.usernameTemp, req.body.groupIdTemp)
    res.redirect("http://localhost:3000/Counseling_Activities/hu21_accept")
}

 
 export default addEvents