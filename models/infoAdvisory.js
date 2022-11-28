import db from "../repository/database";

async function getInfo(id) {
    const data = await db.query('SELECT * FROM ACTIVITY WHERE idActivity = $1', [id]);
    const infoAct = data.rows[0]
    const dataManager = await db.query('SELECT * FROM USERS WHERE username = $1', [infoAct.manager])
    const nameManager = dataManager.rows[0]
    const dataSubject = await db.query('SELECT * FROM SUBJECT WHERE idSubject = $1', [infoAct.subject])
    const infoSubject = dataSubject.rows[0]
    const dataParticipant = await db.query('SELECT idparticipant FROM PARTICIPANT WHERE idActivity = $1', [id])
    const participants = (dataParticipant.rows.length === 0)? ['']: map(dataParticipant.rows)
    

    const info = {
        id: infoAct.idActivity,
        name: infoAct.activity_name,
        view: infoAct.view_activity,
        date: infoAct.date_activity,
        start_hour: infoAct.start_hour,
        end_hour: infoAct.end_hour,
        manager: nameManager.name,
        subject: infoSubject.name,
        type: infoAct.type,
        means: infoAct.means,
        description: infoAct.description,
        participant: participants
    }

    return info
}

function map(m){
    let array = []
    m.map(e => (
        array.push(e.idparticipant)
    ))

    return array
}

// async function getInfo(){
//     const data = await db.query('SELECT * FROM PARTICIPANT')

//     const r = {
//         rows: data.rows
//     }
//     return r
// }

export default getInfo