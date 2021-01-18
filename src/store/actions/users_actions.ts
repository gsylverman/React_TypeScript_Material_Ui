import { AUTH_USER } from "./types";

export const authUser = (data: any) => ({
  type: AUTH_USER,
  payload: data,
});
