import { RootStore } from "./../index";
import { GET_ARTICLES, GetArticles } from "../actions/types";

export default function articleReducer(state: RootStore = {}, action: GetArticles) {
  console.log(action);
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
}
