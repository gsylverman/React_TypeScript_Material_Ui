import { BrowserRouter, Switch, Route } from "react-router-dom";
import GoogleFontLoader from "react-google-font-loader";
import { Grid } from "@material-ui/core";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Navigation/Header";
import MainLayout from "./hoc/MainLayout";

function Routes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Header />
        <Grid item container>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} exact />
          </Switch>
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
