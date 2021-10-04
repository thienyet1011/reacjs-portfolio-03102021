import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";

import SectionTitle from "../components/SectionTitle";
import ProjectItem from "../components/ProjectItem";
import ProjectInfo from "..//assets/data/projects";

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  animation: fadeIn 450ms;
  
  @keyframes fadeIn {
    0% { opacity: 0; transform: scale(0.5); }
    100% { opacity: 1; transform: scale(1); }
  }
  .project__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 1.5rem;
    padding: .8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar, 
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
      height: 44px;
    }
  }
`;

function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === "") return;
    setProjectData(() => (
      ProjectInfo.filter((project) => (
        project.name.toLowerCase().match(searchText.toLowerCase())
      ))
    ));
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  };

  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="Projects"
          subheading="some of recent works" />
        <div className="projects__searchBar">
          <form>
            <input type="text" value={searchText}
              placeholder="Project Name"
              onChange={handleChange} />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="project__allItems">
          {projectData.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.name}
              desc={project.desc}
              img={project.img}
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}

export default Projects;
