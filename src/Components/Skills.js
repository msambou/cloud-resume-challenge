import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Skills = () => {
  return (
    <>
      <Box>
        <Typography variant="h5">SKILLS</Typography>
        <ul>
          <li>Programming: Java, Python, JavaScript, PHP</li>
          <li>Databases: MySQL, PostgreSQL, Cassandra, MongoDB</li>
          <li>Cloud: AWS, GCP, Azure</li>
          <li>Frameworks: Django, Spring Boot, Laravel, Git, Terraform</li>
          <li>
            Domain Expertise: API development, Micro-services Michael Sambou
            Software &amp; Cloud DevOps Engineer Development, Cloud DevOps,
            Linux Administration, Docker &amp; Kubernetes
          </li>
          <li>Teaching</li>
          <li>
            Coursera:{" "}
            <a href="https://www.coursera.org/account/accomplishments/certificate/6GUUDA3GZLFQ">
              Cloud Computing Concepts Part 1
            </a>
          </li>
          <li>
            IBMDeveloperSkillsNetwork:{" "}
            <a href="https://courses.cognitiveclass.ai/certificates/c7b8f5bf6a78488dbf1943dc34b3240b">
              Docker Essentials
            </a>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default Skills;
