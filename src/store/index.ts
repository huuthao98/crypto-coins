import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/auth-slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const appState = {
  auth: authSlice.reducer
  };

export const store = configureStore({
    reducer: appState,
  });
  

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
