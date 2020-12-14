import React from "react";
import {
  AppBar,
  Toolbar,
  // IconButton,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Link to="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/list">
          <Button color="inherit">Lista</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default header;
