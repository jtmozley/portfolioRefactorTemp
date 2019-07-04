import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    width: 230,
    backgroundColor: "rgba(255, 255, 255, 0)"
  },
  media: {
    height: 110,
    paddingTop: "56.25%" // 16:9
  },
  text: {
      color: "white",
      fontWeight: 500,
      fontSize: "1.2rem"
  }
}));

export default function AboutCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://i.imgur.com/zAmIBPv.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography className={classes.text} component="p" align="center">
          Hi, I'm Justin, a web developer from Austin, Texas.
        </Typography>
      </CardContent>
    </Card>
  );
}
