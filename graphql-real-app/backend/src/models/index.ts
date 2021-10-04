import { Sequelize } from "sequelize";
import { $db } from "../../config";

// DBに接続する
const { dialect, port, host, database, username, password } = $db;
const url = `${dialect}://${username}:${password}@${host}:${port}/${database}`;
const sequelize = new Sequelize(url);

// モデルを定義
const models = {
  User: require("./User").default(sequelize, Sequelize),
  sequelize,
};

export default models;
