import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApis } from "~apis/auth.api";

export const loginAction = createAsyncThunk(
    "auth/login",
    async (payload: any) => {
      const resp = await authApis.login(payload);
  
      return resp;
    }
  );