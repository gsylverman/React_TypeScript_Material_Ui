export const GET_ARTICLES = "get_articles";
export const GET_ARTICLE = "get_article";
export const CLEAR_ARTICLE = "clear_article";
export const ERROR_GLOBAL = "error_global";
export const SUCCES_GLOBAL = "succes_global";
export const CLEAR_NOTIFICATIONS = "clear_notifications";
export const AUTH_USER = "auth_user";
export const SIGN_OUT = "sign_out";
export const SITE_LAYOUT = "site_layout";

export interface ErrorGlobalDispatch {
  type: typeof ERROR_GLOBAL;
  payload: string;
}

export interface SuccesGlobalDispatch {
  type: typeof SUCCES_GLOBAL;
  payload: string;
}

export interface ClearNotificationsGlobalDispatch {
  type: typeof CLEAR_NOTIFICATIONS;
}

export type GlobalDispatchErrorSucces =
  | ErrorGlobalDispatch
  | SuccesGlobalDispatch
  | ClearNotificationsGlobalDispatch;

export interface ArticleT {
  content: string;
  date: string;
  director: string;
  excerpt: string;
  score: number;
  status: string;
  title: string;
  _id: string;
  actors: Array<any>;
}

export interface GetArticles {
  type: typeof GET_ARTICLES;
  payload: ArticleT;
}

export interface GetArticle {
  type: typeof GET_ARTICLE;
  payload: ArticleT;
}

export interface ClearArticle {
  type: typeof CLEAR_ARTICLE;
}

export type ArticleAction = GetArticle | GetArticles | ClearArticle;

// users actions
export interface AuthUser {
  type: typeof AUTH_USER;
  payload: string;
}

// layout
export interface SiteLayoutAct {
  type: typeof SITE_LAYOUT;
  payload: string;
}
