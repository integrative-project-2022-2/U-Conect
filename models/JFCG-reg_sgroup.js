import db from "../repository/database";

//Funciona
async function register(groupId, ownerId, groupName, subject, quantityOfStudents, state) {
    const { err } = db.query("INSERT INTO SGROUP (groupId, ownerId, groupName, subject, quantityOfStudents, state) VALUES ($1,$2,$3,$4,$5,$6)", [groupId, ownerId, groupName, subject, quantityOfStudents, state])
    console.log(err)
}

//Funciona
async function editar(email, username) {
    const { err } = await db.query("UPDATE USERS SET email = $1 WHERE username = $2", [email, username])
    console.log(err)
}

//No funciona
async function consultar() {
    const { err } = db.query("SELECT * FROM animal")
    console.log(err)
}

//Funciona
async function borrar(username) {
    const { err } = db.query("DELETE FROM USERS WHERE username=$1", [username])
    console.log(err)
}

export { register, editar, consultar, borrar }

