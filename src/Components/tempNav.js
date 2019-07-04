import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";
import EmailIcon from "@material-ui/icons/Email";
import DescriptionIcon from "@material-ui/icons/Description";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  name: {
    fontSize: "1.9rem",
    color: "#F64C72",
    fontWeight: 500
  },
  lastName: {
    color: "F64C72",
    fontWeight: 300
  },
  menuIcon: {
    fontSize: "2.0rem",
    color: "#F64C72"
  },
  link: {
    color: "black",
    textDecoration: "none",
    fontSize: "1.2rem",

  }
});

export default function TempNav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon className={classes.menuIcon} />
          </Button>
        </Grid>
        <Grid item xs={11}>
          <Typography paragraph className={classes.name}>
            Justin <span className={classes.lastName}>Mozley</span>
          </Typography>
        </Grid>
      </Grid>

      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button key="Home">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to="/portfolio" className={classes.link}>
              <ListItem button key="Portfolio">
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
              </ListItem>
            </Link>
            <Link to="/contact" className={classes.link}>
              <ListItem button key="Contact">
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
            <Link to="/resume" className={classes.link}>
              <ListItem button key="Resume">
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="Resume" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
