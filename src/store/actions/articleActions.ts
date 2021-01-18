import { ArticleT, GET_ARTICLES } from "./types";
import { ERROR_GLOBAL, SUCCES_GLOBAL, CLEAR_NOTIFICATIONS } from "./types";

// Article actions
export const getArts = (articles: ArticleT) => ({
  type: GET_ARTICLES,
  payload: articles,
});

// Notifications
// error
export const errorNotificationGlobal = (message: string) => ({
  type: ERROR_GLOBAL,
  payload: message,
});

// succes
export const succesNotificationGlobal = (message: string) => ({
  type: SUCCES_GLOBAL,
  payload: message,
});

// clear notifications
export const clearNotificationGlobal = () => ({
  type: CLEAR_NOTIFICATIONS,
});
