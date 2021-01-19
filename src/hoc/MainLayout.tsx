import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootStore } from "../store";
import * as tools from "../utils/tools";

export interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const notifications = useSelector((state: RootStore) => state.notifications);

  useEffect(() => {
    if (notifications && notifications.error) {
      tools.showToast("ERROR", notifications.msg);
    }
    if (notifications && notifications.succes) {
      tools.showToast("SUCCES", notifications.msg);
    }
  }, [notifications]);
  return (
    <Grid container direction="column">
      <ToastContainer />
      {children}
    </Grid>
  );
};

export default MainLayout;
