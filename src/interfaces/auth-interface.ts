import { IUser } from "./user-interface";

export interface IAuthResponse {
  token: {
    expiresIn: number;
    accessToken: string;
  };
  user: IUser;
}
