import db from "../../repository/database";

async function api(req, res) {
  if (req.method === "PUT") {
    // const data = await db.query('INSERT INTO PARTICIPANT VALUES ($1, $2)', [req.body.act, req.body.user]);, ['A1', 'Entrega Producto Proyecto Integrador', '10-10-2022', '18:00', '21:00', 'PUBLICO', 'ASESORÍA', 'PRESENCIAL', 'Emily', null, '10332']
    await db.query(
      "INSERT INTO SGROUP (groupid, manager, ownerid, groupid, subject, quantityofstudents) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [
        req.body.groupid,
        req.body.manager,
        req.body.ownerid,
        req.body.groupid,
        req.body.subject,
        req.body.quantityofstudents,
        req.body.state,
      ]
    );
    // [req.body.act, req.body.user]
    return res.json();
  } else if (req.method === "POST") {
    const data = await db.query("SELECT * FROM SGROUP WHERE groupid = $1", [
      req.body.groupid,
    ]);
    return res.json(data.rows);
  } else if (req.method === "POSTGROUPS") {
    const data = await db.query("SELECT * FROM SGROUP WHERE groupid = $1", [
      groupid,
    ]);
  }
}

export default api;
