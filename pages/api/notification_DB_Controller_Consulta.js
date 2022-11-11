import {consultar} from "../../models/notifications";

export default async function N_Controller(req, res){
        const data = await consultar('pipocast');
        
       if (data.rows) res.json(data.rows)
        res.json({message: "not working"})
}