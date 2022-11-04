import db from "../repository/database";

async function register(name, username, email, password, role){
    const {err} = db.query("INSERT INTO USERS (name, username, email, password_user, role) VALUES ($1,$2,$3,$4,$5)", [name, username, email, password, role])
    
    console.log(err)
    
}

async function consult(username, password, response){    
    const res = await db.query("SELECT * FROM USERS WHERE USERNAME = $1 AND PASSWORD_USER = $2", [username, password]);
    if(res.rows.length === 0){

        console.log('no se encontró')
        //console.log(res)
        response((res.rows.length).toString());
        
    } else { 
        console.log('se encontro')
        //console.log(res)
        response(res.rows.length);
    }
}



export {register, consult}