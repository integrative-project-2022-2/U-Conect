import db from "../repository/database";

async function consultar(username){
    const response = await  db.query("SELECT * FROM NOTIFICATION WHERE username = $1", [username])
    db.end()
    
    return response
}

async function create(message, groupId, username){
    const {err} = db.query("INSERT INTO NOTIFICATION VALUES (0001, LOCALDATE, $2, $3, $4, FALSE)", [message, groupId, username])
    db.end()
    if (err) console.log("Error al crear")
}

export {consultar, create};