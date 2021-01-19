import { makeStyles, Typography, Paper } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import { useEffect, useState } from "react";

export interface ErrorPageProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    height: "60vh",
    width: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
  },
}));

const ErrorPage: React.FC<ErrorPageProps> = (props: any) => {
  const classes = useStyles();
  const [isMobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    if (props.width === "xs") {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [props.width]);

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <Typography variant={isMobile ? "h3" : "h1"} component="h1">
          404
        </Typography>
        <Typography variant={isMobile ? "h4" : "h1"} component="h1">
          Page not found!
        </Typography>
      </Paper>
    </div>
  );
};

export default withWidth()(ErrorPage);
