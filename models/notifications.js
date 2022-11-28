import db from "../repository/database";

async function consultar(username){
    const response = await  db.query("SELECT * FROM NOTIFICATION WHERE username = $1", [username])
    db.end()
    
    return response
}

async function create(message, groupId, username){
    const {err} = db.query("INSERT INTO NOTIFICATION(ndate, message, groupId, username, nstatus) VALUES (LOCALDATE, $1, $2, $3, FALSE)", [message, groupId, username])
    db.end()
    if (err) console.log("Error al crear")
}

export {consultar, create};