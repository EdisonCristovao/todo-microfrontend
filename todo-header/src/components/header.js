import React from "react";
import {
  AppBar,
  Toolbar,
  // IconButton,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";

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
        <Button color="inherit">Login</Button>
        <Button color="inherit">Login</Button>
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
