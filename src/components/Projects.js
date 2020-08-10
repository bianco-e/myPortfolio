import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Title from "./Title";
import { projectsData } from "../data/webData";
import ProjectDetail from "./ProjectDetail";
import ScrollButton from "./ScrollButton";

export default function Projects({ lang, refToScroll, setProjectsRef }) {
  const { title, projects } = projectsData;
  var projectsRef = useRef(null);

  useEffect(() => {
    setProjectsRef(projectsRef);
  }, [projectsRef]);

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
      <ScrollButton refToScroll={refToScroll} />
    </Container>
  );
}

const Container = styled.section({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  marginBottom: "140px",
  padding: "20px",
});
const ProjectsWrapper = styled.section({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
});
