import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Profile = () => {
  return (
    <>
      <Box>
        <Typography variant="h5">PROFILE</Typography>
        <Typography paragraph={true}>
          Software Engineer having 4 years of professional experience
          developing, deploying, and maintaining production systems. Highly
          specialized in cloud-native development, systems administration, and
          DevOps. 
        </Typography>
      </Box>
    </>
  );
};

export default Profile;
