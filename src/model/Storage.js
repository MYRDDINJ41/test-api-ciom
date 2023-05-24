import { createPool } from "mysql2/promise";
import {
    DB_HOST,
    DB_DATABASE,
    DB_PASSWORD,
    DB_USER,
    DB_PORT
} from "./Config.js";


export const db = createPool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT
})