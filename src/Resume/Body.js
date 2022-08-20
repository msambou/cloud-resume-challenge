import React from "react";
import { Grid } from "@mui/material";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Profile from "../Components/Profile";
import Skills from "../Components/Skills";

const Body = () => {
  return (
    <>
      <Grid container>
        <Grid md={1}></Grid>
        <Grid md={10}>
          <Grid container>
            <Grid md={6}>
              <Contact />
              <Skills />
              <Education />
            </Grid>
            <Grid md={6}>
              <Profile />
              <Experience />
            </Grid>
          </Grid>
        </Grid>
        <Grid md={1}></Grid>
      </Grid>
    </>
  );
};

export default Body;
