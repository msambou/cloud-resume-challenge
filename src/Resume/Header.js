import { Avatar, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Views from "../Components/Views"
import Resume from "../service/Resume"

const resumeService = new Resume()

const Header = () => {
  const [count, setcount] = useState()
  useEffect(()=>{
    fetchViews()
    incrementViews()
  }, [])

  async function  fetchViews() {
    var response = await resumeService.getViews();
    console.log(response)
    if (response.status) {
      setcount(response.view_count)
    }
  }

  async function incrementViews() {
    var response = await resumeService.incrementViews();
    console.log(response)
  }
  return (
    <>
      <Grid container>
        <Grid md={3}></Grid>
        <Grid md={6} sm={12}>
          <Grid container>
            <Grid md={12} sm={12} xs={12} style={{ background: '#f1f1f4', paddingLeft: 20, paddingBottom: 10, paddingTop: 5, }}>
              <Typography variant="h4" >MICHAEL SAMBOU</Typography>
              <Typography variant="h6" >Software Engineer</Typography>
            </Grid>
            <Grid md={11.8} sm={12} xs={12} sx={{background: 'white',}}>
              <Avatar sx={{ width: 120, height: 120, float:'right', marginTop: -10}}>MS</Avatar>
            </Grid>
          </Grid>

        </Grid>
        <Grid md={3}>
          <Views count={count}></Views>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
