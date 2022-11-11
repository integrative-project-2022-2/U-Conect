import {deleteEvent} from "../../models/addEvent"

 async function deleteEvents (req, res){
    console.log(req.body.groupIdTemp2)
    await deleteEvent(req.body.groupIdTemp2)
    res.redirect("http://localhost:3000/hu21_deny")
 }
 
 export default deleteEvents