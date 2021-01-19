import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(20, 2),
    width: "100%",
    textAlign: "center",
    verticalAlign: "middle",
  },
}));

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
