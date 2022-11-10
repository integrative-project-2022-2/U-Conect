import { Client } from "pg";

var db;

if (!db) {
    db = new Client({
        // host: process.env.Host,
        // user: process.env.User,
        // password: process.env.Password,
        // database: process.env.Database,
        // port: 5432,
        // max: 20,
        // connectionTimeoutMillis: 0,
        // idleTimeoutMillis: 0

        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
    db.connect();
}

export default db;