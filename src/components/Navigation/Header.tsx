import { withRouter } from "react-router-dom";
import React from "react";
import SideDrawer from "./SideDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, IconButton, makeStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

export interface HeaderProps {}

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
  }
}));

const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const [sideDrawerStatus, setSideDrawerStatus] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setSideDrawerStatus(open);
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
        />
      </nav>
    </>
  );
};

export default withRouter(Header);
