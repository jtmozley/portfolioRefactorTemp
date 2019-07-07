import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 450,
    height: 480
  },
  media: {
    height: 270,
    borderBottom: "1px solid rgba(143, 143, 143, 0.15)"
  }
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.image_url}
        title={props.title}
      />
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={props.site_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Site Link
        </Button>
        <Button
          size="small"
          color="primary"
          href={props.repo_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </Button>
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
