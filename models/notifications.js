import db from "../repository/notification_database";

async function consultar(username){
    const {err} = db.query("SELECT * FROM NOTIFICATION WHERE username = $1", [username])
    console.log(err)
}

async function create(message, groupId, username){
    const {err} = db.query("INSERT INTO NOTIFICATION VALUES (0001, LOCALDATE, $2, $3, $4, FALSE)", [message, groupId, username])
    console.log(err)
}

export {consultar, create};