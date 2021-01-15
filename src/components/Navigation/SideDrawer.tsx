import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { ListItemText, TextField } from "@material-ui/core";
import { Dashboard } from "@material-ui/icons";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  searchField: {
    margin: "20px",
  },
});

interface TemporatyDrawerProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  sideDrawerStatus: boolean;
}

export const TemporaryDrawer: React.FC<TemporatyDrawerProps> = ({
  toggleDrawer,
  sideDrawerStatus,
}) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="right"
      open={sideDrawerStatus}
      onClose={toggleDrawer(false)}
    >
      <form noValidate autoComplete="off">
        <TextField
          className={classes.searchField}
          id="outlined-basic"
          label="Search movies"
          variant="outlined"
        />
      </form>
      <Divider />
      <List>
        <ListItem
          button
          component={RouterLink}
          to="/"
          onClick={toggleDrawer(false)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/contact"
          onClick={toggleDrawer(false)}
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/auth"
          onClick={toggleDrawer(false)}
        >
          <ListItemIcon>
            <VpnKeyIcon />
          </ListItemIcon>
          <ListItemText primary="sign in" />
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/logout"
          onClick={toggleDrawer(false)}
        >
          <ListItemIcon>
            <VpnKeyIcon />
          </ListItemIcon>
          <ListItemText primary="sign out" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          component={RouterLink}
          to="/dashboard"
          onClick={toggleDrawer(false)}
        >
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default TemporaryDrawer;
