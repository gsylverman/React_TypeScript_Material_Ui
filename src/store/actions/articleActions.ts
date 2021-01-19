import {
  getArts,
  errorNotificationGlobal,
  clearNotificationGlobal,
} from "../actions";
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
