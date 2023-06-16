//------------- Imports ----------------------------------------------------------------
// CreatePooll is a function that crate a group of connections for the DB
// The second import is fot All configurations are the params for connection in the DB.
import { createPool } from "mysql2/promise";
import {
    DB_HOST,
    DB_DATABASE,
    DB_PASSWORD,
    DB_USER,
    DB_PORT
} from "./Config.js";
// Export db for connection to it and inject the parameters into the pool.
export const db = createPool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT
})