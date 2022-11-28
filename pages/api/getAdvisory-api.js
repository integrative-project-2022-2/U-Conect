import getInfo from "../../models/infoAdvisory";

async function api(req, res) {
    const data = await getInfo(req.body.id);
    return res.json(data)

    // const data = await getInfo()
    // return res.json(data)
}

export default api