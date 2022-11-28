import {create} from "../../models/notifications";

export default async function N_Controller_Create(req, res){
        create(req.body.message, req.body.groupId, req.body.username);
}