import db from "../../repository/database";

async function api(req, res) {
    if(req.method === 'PUT') {
        // const data = await db.query('INSERT INTO PARTICIPANT VALUES ($1, $2)', [req.body.act, req.body.user]);
        await db.query('INSERT INTO ACTIVITY (idActivity, activity_name, date_Activity, start_hour, end_hour, view_Activity, type, means, manager, description, subject) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', ['A1', 'Entrega Producto Proyecto Integrador', '10-10-2022', '18:00', '21:00', 'PUBLICO', 'ASESORÍA', 'PRESENCIAL', 'Emily', null, '10332'])
        // [req.body.act, req.body.user]
        return res.json()
    } else if (req.method === 'POST') {
        const data = await db.query('SELECT * FROM participant WHERE idactivity = $1', [req.body.id]);
        return res.json(data.rows)
    } else {

    }
}

export default api