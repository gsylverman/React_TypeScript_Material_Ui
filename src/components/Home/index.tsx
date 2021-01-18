import { Button, Grid } from "@material-ui/core";
import { Dispatch, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import ArticleCard from "../../utils/ArticleCard";
import { useEffect } from "react";
import { getArticles } from "../../store/actions";
import { ArticleT, GetArticles } from "../../store/actions/types";

export interface HomeProps {}

interface InitialSort {
  sortBy: string;
  order: string;
  limit: number;
  skip: number;
}

const initialSort = { sortBy: "_id", order: "asc", limit: 8, skip: 0 };

const homeReducer = (state: InitialSort, action: Dispatch<GetArticles>) => {
  return { ...state, ...action };
};

const Home: React.FC<HomeProps> = () => {
  const [sort] = useReducer(homeReducer, initialSort);
  const articles = useSelector((state: RootStore) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(articles).length && !articles.articles) {
      dispatch(getArticles(sort));
    }
  }, [dispatch, articles, sort]);
  return (
    <div>
      <div>CARROUSEL</div>
      <Grid container>
        <Grid item container sm={1} lg={2} />
        <Grid item container spacing={2} sm={10} lg={8}>
          {Object.keys(articles).length &&
            articles.articles.map((article: ArticleT, index: number) => (
              <Grid
                key={article._id}
                item
                sm={6}
                lg={4}
                alignItems="center"
                container
              >
                <Grid item>
                  <ArticleCard article={article} key={article._id} />
                </Grid>
              </Grid>
            ))}
        </Grid>
        <Grid item container sm={1} lg={2} />
      </Grid>
      <Button variant="contained" color="primary">
        Load More
      </Button>
    </div>
  );
};

export default Home;
