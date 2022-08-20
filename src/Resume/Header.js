import { Avatar, Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
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
          {/* <Grid md={4} style={{ background: 'red' }}> */}
              {/* <Avatar sx={{ width: 100, height: 100}}>MS</Avatar> */}
            {/* </Grid> */}
        </Grid>
        <Grid md={3}></Grid>
      </Grid>
    </>
  );
};

export default Header;
