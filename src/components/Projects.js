import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { projectsData } from "../data/webData";
import ProjectDetail from "./ProjectDetail";

export default function Projects({ lang }) {
  const { title, projects } = projectsData;

  return (
    <Container>
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

const Container = styled.div({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const ProjectsWrapper = styled.section({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
});
