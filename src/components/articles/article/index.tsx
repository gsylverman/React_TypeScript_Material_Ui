import { RootStore } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ArticleCard from "../../../utils/ArticleCard";
import { ArticleT } from "../../../store/actions/types";
import { getArticle } from "../../../store/actions/articleActions";

export interface ArticleProps {
  match: any;
}

const Article: React.FC<ArticleProps> = (props) => {
  const { current } = useSelector((state: RootStore) => state.articles);
  const dispatch = useDispatch();
  console.log(current);

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(getArticle(id));
  }, [props.match.params]);

  return <>{current && <ArticleCard article={current} />}</>;
};

export default Article;
