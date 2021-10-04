export interface User {
  username: string;
  password: string;
  email: string;
  privilege: string;
  active: boolean;
}

export interface Sequelize {
  _default: any;
  name?: string;
  options?: any;
  associate?: any;
}

export interface IDataTypes {
  UUID: string;
  UUIDV4(): string;
  STRING: string;
  BOOLEAN: boolean;
  TEXT: string;
  INTEGER: number;
  DATE: string;
  FLOAT: number;
}

export interface IUser extends User, Sequelize {
  id: string;
  token?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateUserInput extends User {}

export interface ILoginInput {
  email: string;
  password: string;
}

export interface IAuthPayload {
  token: string;
}

export interface IModels {
  User: any;
  sequelize: any;
}
