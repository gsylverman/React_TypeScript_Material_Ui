import { RootStore } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import {
  getArticle,
  clearArticle,
} from "../../../store/actions/articleActions";
import Loader from "../../../utils/loader";
import { Grid } from "@material-ui/core";
import ScoreCard from "../../../utils/scoreCard";

export interface ArticleProps {
  match: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "30px",
    },
  })
);

const Article: React.FC<ArticleProps> = (props) => {
  const { current } = useSelector((state: RootStore) => state.articles);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(getArticle(id));
  }, [props.match.params, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearArticle());
    };
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={1} />
        <Grid item sm={10}>
          {current ? (
            <div className="article_container">
              <div
                style={{
                  background: `url(https://picsum.photos/1920/1080)`,
                }}
                className="image"
              ></div>
              <h1>{current.title}</h1>
              <div className="mt-3 content">
                <div
                  dangerouslySetInnerHTML={{ __html: current.content }}
                ></div>
              </div>
              <ScoreCard current={current} />
            </div>
          ) : (
            <Loader />
          )}
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </div>
  );
};

export default Article;
