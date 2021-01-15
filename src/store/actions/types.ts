export const GET_ARTICLES = "get_articles";

export interface ArticleT {
  content: string;
  date: string;
  director: string;
  excerpt: string;
  score: number;
  status: string;
  title: string;
  _id: string
}

export interface GetArticles {
  type: typeof GET_ARTICLES;
  payload: ArticleT;
}
