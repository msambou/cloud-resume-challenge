import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Experience = () => {
  return (
    <>
      <Box>
        <Typography variant="h5">EXPERIENCE</Typography>
        <Typography variant="h6">Research Assistant</Typography>
        <Typography>
          Technology for Effective and Efficient Learning (TEEL) Lab, CMU SCS
        </Typography>
        <Typography>2021 - Present</Typography>
        <ul>
          <li>
            Upgraded an entire code-base of a hands-on project to a latest AWS
            Java SDK version
          </li>
          <li>
            Updated portions of a write-up to guide learners in navigating
            various Cloud Service Providers(AWS, Azure, and GCP) dashboards
          </li>
          <li>
            Built course content and auto-graders in Java, introducing learners
            to GitHub actions CI/CD pipelines
          </li>
        </ul>

        <Typography variant="h6">Graduate Teaching Assistant</Typography>
        <Typography>Carnegie Mellon University, Africa</Typography>
        <Typography>2021</Typography>
        <ul>
          <li>
            Designed lab work for the Advanced Database Systems course. Through
            these lab exercises, students were exposed to hands-on projects
          </li>
          <li>
            Held Office Hours to assist students with issues related to course
            assignments
          </li>
        </ul>

        <Typography variant="h6">Software Engineer</Typography>
        <Typography>
          Rwanda Environment Management Authority Kigali, Rwanda
        </Typography>
        <Typography>2021</Typography>
        <ul>
          <li>
            Designed and programmed a frontend application for processing
            licensing applications, replacing the manual way of requesting and
            processing licenses and thus increased the department’s overall work
            efficiency
          </li>
        </ul>
      </Box>
    </>
  );
};

export default Experience;
