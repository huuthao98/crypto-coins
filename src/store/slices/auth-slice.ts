import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "src/interfaces/user-interface";
import { httpService } from "~services";

const initialState: {
  isAuth: boolean;
  user: IUser | null;
  isGlobalLoading: boolean;
  language: "en" | "vi" | "cn";
  isSidebar:boolean;
  coins:[];
} = {
    isAuth: false,
    user: null,
    isGlobalLoading: true,
    language: "en",
    isSidebar: false,
    coins:[],
};

const cartSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setIsGlobalLoading: (state, action) => {
      state.isGlobalLoading = action.payload;
    },
    setIsSidebar:(state, action)=>{
      state.isSidebar = action.payload;

    },
    setDataCoins:(state, action)=>{
      state.coins = action.payload
    }
  },

});

export const { setLanguage, setIsGlobalLoading,setIsSidebar ,setDataCoins} = cartSlice.actions;

export default cartSlice;
