import { encrypt, isPasswordMatch } from "@contentpi/lib";
import { AuthenticationError } from "apollo-server-errors";
import { IAuthPayload, IModels, IUser } from "types";
import { createToken } from "./jwt";

export const getUserBy = async (
  where: any,
  models: IModels
): Promise<IUser> => {
  const user = await models.User.findOne({ where, raw: true });
  return user;
};

export const doLogin = async (
  email: string,
  password: string,
  models: IModels
): Promise<IAuthPayload> => {
  // TODO: コメントを追加する
  const user = await getUserBy({ email }, models);
  if (!user) {
    throw new AuthenticationError("Invalid Error");
  }
  const passwordMatch = isPasswordMatch(encrypt(password), user.password);
  if (!passwordMatch) {
    throw new AuthenticationError("Invalid Login");
  }
  const isActive = user.active;
  if (!isActive) {
    throw new AuthenticationError("Your account is not activated yet");
  }
  const [token] = await createToken(user);
  return {
    token,
  };
};
