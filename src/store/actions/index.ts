import { RootStore } from "./../index";
import { Dispatch } from "redux";
import { GET_ARTICLES } from "./types";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const getArticles = (sort: any) => async (
  dispatch: Dispatch<any>,
  getState: RootStore
) => {
  try {
    const arts = await axios.post("/api/articles/loadmore");
    dispatch({
      type: GET_ARTICLES,
      payload: arts.data,
    });
  } catch (e) {
    ///
  }
};
