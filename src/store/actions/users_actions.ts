import { SIGN_OUT } from "./types";
import { getAuthHeaders, removeTokenCookie } from "./../../utils/tools";
import { authUser } from "../actions";
import {
  errorNotificationGlobal,
  succesNotificationGlobal,
  clearNotificationGlobal,
} from "../actions";
import { Dispatch } from "redux";
import axios from "axios";

// users **************************

interface Values {
  email: string;
  password: string;
}

export const registerUser = ({ email, password }: Values) => async (
  dispatch: Dispatch<any>
) => {
  try {
    const requestUser = await axios.post("/api/users/register", {
      email,
      password,
    });
    dispatch(succesNotificationGlobal("Hi, You have successfuly registered"));
    dispatch(clearNotificationGlobal());
    dispatch(authUser({ data: requestUser.data, auth: true }));
  } catch (err) {
    dispatch(errorNotificationGlobal(err.response.data.message));
    dispatch(clearNotificationGlobal());
  }
};

export const signInUser = ({ email, password }: Values) => async (
  dispatch: Dispatch<any>
) => {
  try {
    const requestUser = await axios.post("/api/users/signin", {
      email,
      password,
    });
    dispatch(authUser({ data: requestUser.data, auth: true }));
    dispatch(succesNotificationGlobal("Hi, You have successfuly logged in"));
    dispatch(clearNotificationGlobal());
  } catch (err) {
    dispatch(errorNotificationGlobal(err.response.data.message));
    dispatch(clearNotificationGlobal());
  }
};

export const isAuthUser = () => async (dispatch: Dispatch<any>) => {
  try {
    const requestUser = await axios.get("/api/users/isauth", getAuthHeaders);
    dispatch(authUser({ data: requestUser.data, auth: true }));
  } catch (err) {
    dispatch(authUser({ data: {}, auth: false }));
  }
};

export const signOut = () => async (dispatch: Dispatch<any>) => {
  removeTokenCookie();
  await dispatch(succesNotificationGlobal("Bye"));
  dispatch(clearNotificationGlobal());
  dispatch({ type: SIGN_OUT });
};
