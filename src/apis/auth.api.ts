import { IAuthResponse } from "src/interfaces/auth-interface";
import { IUser } from "src/interfaces//user-interface";
import { httpService } from "~services";


export const authApis = {
    login: (payload: { username: string; password: string}) => {
        return httpService
          .post<{ data: IAuthResponse }>("/auth/login", payload, { withCredentials: true })
          .then((res) => res.data);
      },
}