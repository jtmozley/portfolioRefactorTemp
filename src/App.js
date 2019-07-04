import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TempNav from "./Components/TempNav";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AboutCard from "./Components/AboutCard";

const useStyles = makeStyles(theme => ({
  text: {
    color: "white",
    fontWeight: 500,
    fontSize: "1.2rem"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <TempNav />
      <Container maxWidth="md">
        <Grid container justify="center" spacing={1}>
          <Grid item xs={4}>
            <AboutCard />
          </Grid>
          <Grid item xs={8}>
            <Typography paragraph className={classes.text}>
              Bacon ipsum dolor amet hamburger flank jerky, burgdoggen fatback
              beef ribs tail capicola pastrami t-bone shoulder sirloin tongue.
              Andouille bacon cupim spare ribs bresaola pork loin kielbasa pork
              tongue. Venison sirloin turkey leberkas kevin beef corned beef,
              pastrami sausage shankle shank brisket tri-tip strip steak. Turkey
              short ribs turducken tri-tip, t-bone alcatra capicola frankfurter.
              Swine chicken boudin kielbasa turkey, fatback andouille ball tip
              meatball. Landjaeger beef leberkas fatback jowl pastrami ball tip
              rump prosciutto cow.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
