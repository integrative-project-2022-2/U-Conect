import {consultar} from "../../models/notifications";

export default async function N_Controller(req, res){
        const data = await consultar('pipocast');
        console.log(data);
        return res.json(data.rows);
}
