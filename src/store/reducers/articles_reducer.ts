import { CLEAR_ARTICLE } from "./../actions/types";
import { RootStore } from "./../index";
import { GET_ARTICLES, ArticleAction, GET_ARTICLE } from "../actions/types";

export default function articleReducer(
  state: RootStore = {},
  action: ArticleAction
) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case CLEAR_ARTICLE:
      return {
        ...state,
        current: null,
      };
    case GET_ARTICLE:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}
