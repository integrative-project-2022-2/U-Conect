import { Client } from "pg";

var db;

if (!db) {
    db = new Client({
        connectionString: process.env.DATABASE_URI,
        ssl: {
            rejectUnauthorized: false
        }
    });
    db.connect();
}

export default db;