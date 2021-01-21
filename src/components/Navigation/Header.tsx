import { RouteComponentProps, withRouter } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideDrawer from "./SideDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, IconButton, makeStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { signOut } from "../../store/actions/users_actions";
import { setLayout } from "../../store/actions/siteActions";
import { RootStore } from "../../store";

export interface HeaderProps {
  location: RouteComponentProps["location"];
  history: RouteComponentProps["history"];
  match: RouteComponentProps["match"];
}

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
  },
}));

const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const [sideDrawerStatus, setSideDrawerStatus] = React.useState(false);
  const users = useSelector((state: RootStore) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const layout = props.location.pathname.includes("dashboard")
      ? "admin"
      : "user";
    dispatch(setLayout(layout));
  }, [props.location.pathname, dispatch]);

  const signOutUser = () => {
    dispatch(signOut());
    props.history.push("/");
  };

  const toggleDrawer = (value: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setSideDrawerStatus(value);
  };

  return (
    <>
      <nav className="navbar fixed-top">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Brand
            </Typography>
            <MenuItem style={{ backgroundColor: "transparent" }}>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </MenuItem>
          </Toolbar>
        </AppBar>
        <SideDrawer
          toggleDrawer={toggleDrawer}
          sideDrawerStatus={sideDrawerStatus}
          signOut={signOutUser}
          users={users}
        />
      </nav>
    </>
  );
};

export default withRouter(Header);
