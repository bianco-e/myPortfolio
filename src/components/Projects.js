import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Title from "./Title";
import { projectsData } from "../data/webData";
import ProjectDetail from "./ProjectDetail";
import { LARGE_RESPONSIVE_BREAK } from "../utils/constants";

export default function Projects({ lang, setProjectsRef }) {
  const { title, projects } = projectsData;
  var projectsRef = useRef(null);

  useEffect(() => {
    setProjectsRef(projectsRef);
  }, [projectsRef]); //eslint-disable-line

  return (
    <Container ref={projectsRef}>
      <Title content={title[lang]} />
      <ProjectsWrapper>
        {projects.map((project) => {
          return (
            <ProjectDetail key={project.name} lang={lang} project={project} />
          );
        })}
      </ProjectsWrapper>
    </Container>
  );
}

const Container = styled.section`
  > h2 {
    margin-bottom: 70px;
  }
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 180px;
  padding: 20px;
  width: 950px;
  @media (max-width: ${LARGE_RESPONSIVE_BREAK}) {
    width: 100%;
  }
`;
const ProjectsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
