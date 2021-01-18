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

// users Dispatch Actions
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
    console.log(requestUser);
    dispatch(authUser({ data: requestUser.data, auth: true }));
  } catch (err) {
    dispatch(errorNotificationGlobal(err.response.data.message));
    dispatch(clearNotificationGlobal());
  }
};
