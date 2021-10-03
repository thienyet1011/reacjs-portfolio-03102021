import React from "react";
import styled from "styled-components";

import SectionTitle from "../components/SectionTitle";

const ProjectsStyles = styled.div`
  padding: 10rem 0;
`;

function Projects() {
  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="Projects"
          subheading="some of recent works" />
      </div>
    </ProjectsStyles>
  );
}

export default Projects;
