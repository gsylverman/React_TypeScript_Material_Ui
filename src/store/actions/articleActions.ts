import { ArticleT, GET_ARTICLES } from "./types";
import { ERROR_GLOBAL, SUCCES_GLOBAL, CLEAR_NOTIFICATIONS } from "./types";

// Article actions
export const getArts = (articles: ArticleT) => ({
  type: GET_ARTICLES,
  payload: articles,
});

// Notifications
// error
export const errorAction = (message: string) => ({
  type: ERROR_GLOBAL,
  payload: message,
});

// succes
export const succesAction = (message: string) => ({
  type: SUCCES_GLOBAL,
  payload: message,
});

// clear notifications
export const clearNotificationAction = () => ({
  type: CLEAR_NOTIFICATIONS,
});
