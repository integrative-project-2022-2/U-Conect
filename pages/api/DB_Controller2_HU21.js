import {addEvent} from "../../models/addEvent"

async function addEvents (req, res){
    console.log(req.body.usernameTemp, req.body.groupIdTemp)
    addEvent(req.body.usernameTemp, req.body.groupIdTemp)
    res.redirect("http://localhost:3000")
 }

 
 export default addEvents