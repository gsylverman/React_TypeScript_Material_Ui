import { AUTH_USER, SIGN_OUT } from "./types";

export const authUser = (data: any) => ({
  type: AUTH_USER,
  payload: data,
});

export const logOutUser = () => ({
  type: SIGN_OUT,
});
