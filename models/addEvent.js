import db from "../repository/database"

async function addEvent(usernameTemp,groupIdTemp){
    const {err} = await db.query("UPDATE SGROUP SET manager = $1 WHERE groupid = $2", [usernameTemp,groupIdTemp])
    console.log(err)
}

async function deleteEvent(groupIdTemp){
    console.log("id del grupo: "+groupIdTemp)
    try {
        const {rows,err} = await db.query("DELETE FROM SGROUP WHERE groupid = $1 ", [groupIdTemp])
        console.log("success")
    }catch(Error ){
        console.log(Error)
    }
    
}

export {addEvent,deleteEvent}