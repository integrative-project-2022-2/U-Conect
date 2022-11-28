import db from "../repository/database";

async function PUT(idAct, user) {
    await db.query('INSERT INTO PARTICIPANT(idParticipant, idActivity ) VALUES ($1, $2)', [user,idAct]);
    return true
}

async function GET(idAct, user) {
    const data = await db.query('SELECT * FROM PARTICIPANT WHERE idParticipant = $1 AND idActivity = $2', [user,idAct]);
    const rows = data.rows
    return (rows.length === 0)
}

export {PUT, GET}