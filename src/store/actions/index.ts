import { SIGN_OUT } from "./types";
import { getAuthHeaders, removeTokenCookie } from "./../../utils/tools";
import { authUser } from "./users_actions";
import {
  getArts,
  errorNotificationGlobal,
  succesNotificationGlobal,
  clearNotificationGlobal,
} from "./articleActions";
import { RootStore } from "./../index";
import { Dispatch } from "redux";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const getArticles = (sort: any) => async (
  dispatch: Dispatch<any>,
  getState: RootStore
) => {
  try {
    const arts = await axios.post("/api/articles/loadmore");
    dispatch(getArts(arts.data));
    // dispatch(succesNotificationGlobal("succes"));
    // dispatch(clearNotificationGlobal());
  } catch (e) {
    dispatch(errorNotificationGlobal(e.message));
    dispatch(clearNotificationGlobal());
  }
};

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
    dispatch(succesNotificationGlobal("Hi, You have successfuly logged in"));
    dispatch(clearNotificationGlobal());
    dispatch(authUser({ data: requestUser.data, auth: true }));
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
  dispatch({ type: SIGN_OUT });
};
