import {
  AUTH_USER,
  SIGN_OUT,
  SITE_LAYOUT,
  ERROR_GLOBAL,
  SUCCES_GLOBAL,
  CLEAR_NOTIFICATIONS,
  ArticleT,
  GET_ARTICLES,
  GET_ARTICLE,
  CLEAR_ARTICLE,
} from "./types";

// Article actions
export const getArts = (articles: ArticleT) => ({
  type: GET_ARTICLES,
  payload: articles,
});

export const setCurrentArticle = (article: ArticleT) => ({
  type: GET_ARTICLE,
  payload: article,
});

export const clearCurrentArticle = () => ({
  type: CLEAR_ARTICLE,
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

//users

export const authUser = (data: any) => ({
  type: AUTH_USER,
  payload: data,
});

export const logOutUser = () => ({
  type: SIGN_OUT,
});

//site

export const siteLayout = (layout: string) => ({
  type: SITE_LAYOUT,
  payload: layout,
});
