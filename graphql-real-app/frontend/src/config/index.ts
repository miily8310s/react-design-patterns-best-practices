import common from "./common.json";
import local from "./local.json";
import production from "./production.json";

interface IConfig {
  baseUrl: string;
  apiUrl: string;
  server: {
    port: number;
  };
  security: {
    secretKey: string;
    expiresIn: string;
  };
}

const { NODE_ENV = "development" } = process.env;
const environment = NODE_ENV !== "development" ? NODE_ENV : "local";

const config: IConfig = {
  ...common,
  ...(environment === "local" ? local : production),
};

export const isLocal = () => environment === "local";
export const isProduction = () => environment === "production";

export default config;
