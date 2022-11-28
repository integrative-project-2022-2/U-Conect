import { PUT, GET } from "../../models/joinAdvisory";

async function api(req, res) {
    if (req.method === 'POST') {
        const response = await GET(req.body.idAct, req.body.user)
        const r = await response.rows
        const l = {
            length: (r)?r.length:0
        }
        return res.json(l)
    } else {
        await PUT(req.body.idAct, req.body.user)
        return res.json(1)
    }
}

export default api