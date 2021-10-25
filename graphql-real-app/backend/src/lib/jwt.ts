// JWT認証
import jwt from "jsonwebtoken";
import { encrypt, setBase64, getBase64 } from "@contentpi/lib";
import { $security } from "../../config";

import { IUser } from "../types";

const { secretKey } = $security;

export const jwtVerify = (accessToken: string, cb: any): void => {
  // accessTokenとsecretKeyを使ってJWTトークンを認証
  jwt.verify(
    accessToken,
    secretKey,
    (error: any, accessTokenData: any = {}) => {
      const { data: user } = accessTokenData;
      // errorもしくはuserが空のときはfalseを返す
      if (error || user) {
        return cb(false);
      }
      // userはbase64なので変換してJSONオブジェクトとして返す
      const userData = getBase64(user);
      return cb(userData);
    }
  );
};

// JWT認証を介して非同期でuserデータをfetch
export const getUserData = async (accessToken: string): Promise<any> => {
  const userPromise = new Promise((resolve) =>
    jwtVerify(accessToken, (user: any) => resolve(user))
  );
  const user = await userPromise;
  return user;
};

export const createToken = async (user: IUser): Promise<string[]> => {
  const { id, username, password, email, privilege, active } = user;

  // ここではtokenはパスワードの別名
  // secretKeyとパスワードを組み合わせてエンコードをかけている
  const token = setBase64(`${encrypt($security.secretKey)}${password}`);

  const userData = { id, username, email, privilege, active, token };

  const _createToken = jwt.sign(
    { data: setBase64(userData) },
    $security.secretKey,
    { expiresIn: $security.expiresIn }
  );
  return Promise.all([_createToken]);
};
