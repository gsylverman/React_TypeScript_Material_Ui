import {
  getArts,
  currentArticle,
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

export const getArticle = (id: string) => async (
  dispatch: Dispatch<any>,
  getState: RootStore
) => {
  try {
    const request = await axios.get(`/api/articles/get_byid/${id}`);
    dispatch(currentArticle(request.data[0]));
  } catch (e) {
    dispatch(errorNotificationGlobal(e.message));
    dispatch(clearNotificationGlobal());
  }
};
