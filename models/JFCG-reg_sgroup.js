import db from "../repository/JFCG-database";

//Funciona
async function register(groupId, ownerId, groupName, subject, quantityOfStudents, state) {
    const { err } = db.query("INSERT INTO SGROUP (groupId, ownerId, groupName, subject, quantityOfStudents, state) VALUES ($1,$2,$3,$4,$5,$6)", [groupId, ownerId, groupName, subject, quantityOfStudents, state])
    console.log(err)
}

async function register_integrants(user_group, student) {
    const { err } = db.query("INSERT INTO SGROUP_USER (user_group, student) VALUES ($1,$2)", [user_group, student])
    console.log(err)
}

//Funciona
async function editar(email, username) {
    const { err } = await db.query("UPDATE USERS SET email = $1 WHERE username = $2", [email, username])
    console.log(err)
}

//No funciona
async function consultar(q) {
    const res = await db.query("SELECT name FROM USERS")
    
    return {res: res.rows}
}

//Funciona
async function borrar(username) {
    const { err } = db.query("DELETE FROM USERS WHERE username=$1", [username])
    console.log(err)
}

export { register, register_integrants, editar, consultar, borrar }

