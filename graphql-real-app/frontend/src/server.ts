import cookieParser from "cookie-parser";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cors from "cors";
import session from "express-session";
import config from "./config";
import { isConnected } from "./lib/ middlewares/user";

const app = express();
const port = process.env.NODE_PORT || 3000;
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

// APIを叩くたびに発生するmiddlewareを設定

// ここではhtmlファイルなど静的ファイルを読み込んでいる
app.use(express.static(DIST_DIR));

// セッションを設定
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: config.security.secretKey,
  })
);

// クライアントから送信されたデータをreq.bodyで取得できるように
app.use(express.json());
// フォームに入力された内容をオブジェクトに変換
app.use(express.urlencoded({ extended: true }));
// Cookieを有効に
app.use(cookieParser());
// CORSを使ってホスト名やポート番号など同一生成元でないところへの要求を安全に許可させる
app.use(cors({ credentials: true, origin: true }));

// Routes
app.get(
  "/dashboard",
  isConnected(true, ["god", "admint"]),
  (req: Request, res: Response, next: NextFunction) => {
    next();
  }
);

app.get("/logout", (req: Request, res: Response) => {
  res.clearCookie("at");
  res.redirect("/");
});

app.get("*", (req: Request, res: Response) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, () =>
  console.log(`Running at http://localhost:
${port}`)
);
