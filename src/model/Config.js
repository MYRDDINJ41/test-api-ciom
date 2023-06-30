import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 8081;

export const DB_USER = process.env.DB_USER || "userdev-pu";
export const DB_PASSWORD = process.env.DB_PASSWORD || "5DnRTbXtZq*";
export const DB_HOST = process.env.DB_HOST || "server.ciomprix.com";
export const DB_DATABASE = process.env.DB_DATABASE || "portafolioDB";
export const DB_PORT = process.env.DB_PORT || 3306;