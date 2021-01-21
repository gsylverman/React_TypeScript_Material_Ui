import { RootStore } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ArticleCard from "../../../utils/ArticleCard";
import { ArticleT } from "../../../store/actions/types";

export interface ArticleProps {
  match: any;
}

const Article: React.FC<ArticleProps> = (props) => {
  const [currentArticle, setCurrentArticle] = useState<ArticleT>({
    content: "",
    date: "",
    director: "",
    excerpt: "",
    score: 0,
    status: "",
    title: "",
    _id: "",
  });
  const { articles } = useSelector((state: RootStore) => state.articles);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = props.match.params.id;
    const current = articles.find((article: ArticleT) => article._id === id);
    setCurrentArticle(current);
    console.log(currentArticle);
  }, [props.match.params]);

  return <ArticleCard article={currentArticle} />;
};

export default Article;
