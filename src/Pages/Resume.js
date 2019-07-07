import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TempNav from "../Components/TempNav";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  resume: {
    backgroundImage: "url('https://i.imgur.com/YcyfC3L.jpg')",
    backgroundSize: "cover",
    width: 800,
    height: 900,
    marginBottom: 20
  }
});

export default function Resume() {
  const classes = useStyles();

  return (
    <div>
      <TempNav />
      <Container maxWidth="md" align="center">
        <a
          href="https://drive.google.com/file/d/1-H8eu7gYsWQ0hU0wDHt_jTFC50v7uOnl/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Paper className={classes.resume} />
        </a>
      </Container>
    </div>
  );
}
