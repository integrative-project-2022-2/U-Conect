import db from "../repository/database"
  
async function addEvent(usernameTemp,groupIdTemp){
    const {err} = await db.query("UPDATE SGROUP SET manager = $1 WHERE groupid = $2", [usernameTemp,groupIdTemp])
    console.log(err)
}

async function deleteEvent(groupIdTemp){
    const {err} = await db.query("UPDATE SGROUP SET manager = null WHERE groupid = $1", [groupIdTemp])
    console.log(err)       
}

export {addEvent,deleteEvent}