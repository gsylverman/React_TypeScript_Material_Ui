import { BrowserRouter, Switch, Route } from "react-router-dom";
import GoogleFontLoader from "react-google-font-loader";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { isAuthUser } from "./store/actions/users_actions";
import { RootStore } from "./store";
import { useEffect, useState } from "react";

import Auth from "./components/Auth";
import Profile from "./components/Dashboard/Profile";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import Header from "./components/Navigation/Header";
import MainLayout from "./hoc/MainLayout";
import authGuard from "./hoc/authGuard";
import Loader from "./utils/loader";
import Articles from "./components/Dashboard/Articles";

function Routes() {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const users = useSelector((state: RootStore) => state.users);

  useEffect(() => {
    dispatch(isAuthUser());
  }, [dispatch]);

  useEffect(() => {
    if (users && users.auth !== null) {
      setLoading(false);
    }
  }, [users]);

  return (
    <BrowserRouter>
      <MainLayout>
        <Header />
        <Grid item container>
          {!loading ? (
            <Switch>
              <Route
                path="/dashboard/articles"
                component={authGuard(Articles)}
              />
              <Route path="/dashboard/profile" component={authGuard(Profile)} />
              <Route path="/dashboard" component={authGuard(Dashboard)} />
              <Route path="/auth" component={Auth} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} exact />
              <Route path="/" component={ErrorPage} />
            </Switch>
          ) : (
            <Loader />
          )}
          <GoogleFontLoader
            fonts={[
              {
                font: "Roboto",
                weights: [300, 400, 900],
              },
              {
                font: "Fredoka One",
                weights: [300, 400, 900],
              },
            ]}
            subsets={["cyrillic-ext", "greek"]}
          />
        </Grid>
      </MainLayout>
    </BrowserRouter>
  );
}

export default Routes;
