import React, { Component } from "react";
import TempNav from "../Components/TempNav";
// import Grid from "@material-ui/core/Grid";
// import { Container } from "@material-ui/core";

class Portfolio extends Component {
  state = {
    
  };
  render() {
    return (
      <div>
        <TempNav />
        {/* <Container maxWidth="md">
          <Grid container spacing={4}>
            {this.state.Projects.map(project => (
              <Grid item xs={6} align="center">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image_url={project.image_url}
                  site_url={project.site_url}
                  repo_url={project.repo_url}
                />
              </Grid>
            ))}
          </Grid>
        </Container> */}
      </div>
    );
  }
}

export default Portfolio;