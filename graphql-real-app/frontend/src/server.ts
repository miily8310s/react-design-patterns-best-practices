import cookieParser from "cookie-parser";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cors from "cors";
import session from "express-session";
import config from "./config";

const app = express();
const port = process.env.NODE_PORT || 3000;
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

// TODO: 各middlewareの説明コメント入れる
// APIを叩くたびに発生するmiddlewareを設定

// ここではhtmlファイルなど静的ファイルを読み込んでいる
app.use(express.static(DIST_DIR));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: config.security.secretKey,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));
