import { IUser } from "../../types";

export interface IAuthResponse {
  message?: string[];
  access_token: string;
  user: IUser;
}

export interface IAuthError {
  response: {
    data: {
      message: string[];
    };
  };
}
