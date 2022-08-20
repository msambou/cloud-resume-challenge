import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Education = () => {
  return (
    <>
      <Box>
        <Typography variant="h5">EDUCATION</Typography>
        <Typography variant="h6">Carnegie Mellon University</Typography>
        <Typography paragraph={true}>
          Master Of Science in Information Technology, 2020 - 2022
          <br />
          Major: Software Engineering; Recipient of a full scholarship, funded
          by the Mastercard Foundation.
        </Typography>

        <Typography variant="h6">University of Ghana</Typography>
        <Typography paragraph={true}>
          Bachelor Of Science in Computer Science, 2014 - 2018
        </Typography>
      </Box>
    </>
  );
};

export default Education;
