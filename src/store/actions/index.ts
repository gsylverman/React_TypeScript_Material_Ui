import {
  getArts,
  errorAction,
  succesAction,
  clearNotificationAction,
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
    dispatch(succesAction("succes"));
    dispatch(clearNotificationAction());
  } catch (e) {
    dispatch(errorAction(e.message));
    dispatch(clearNotificationAction());
  }
};

// Notifications
export const errorGlobal = (message: string) => async (
  dispatch: Dispatch<any>
) => {
  dispatch(errorAction);
};
