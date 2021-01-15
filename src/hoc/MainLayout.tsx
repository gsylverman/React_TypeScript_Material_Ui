import { Grid } from "@material-ui/core";

export interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Grid container direction="column">
      {children}
    </Grid>
  );
};

export default MainLayout;
