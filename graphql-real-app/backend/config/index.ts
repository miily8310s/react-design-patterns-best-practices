import dotenv from "dotenv";
import config from "./config.json";

dotenv.config();

interface Db {
  dialect: string;
  host: string;
  port: string;
  database: string;
  username: string;
  password: string;
}

interface Security {
  secretKey: string;
  expiresIn: string;
}

interface Server {
  port: number;
}

const { DB_DIALECT, DB_PORT, DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } =
  process.env;

const db: Db = {
  dialect: DB_DIALECT,
  port: DB_PORT,
  host: DB_HOST,
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD,
};

const { security, server } = config;

export const $db: Db = db;
export const $security: Security = security;
export const $server: Server = server;
