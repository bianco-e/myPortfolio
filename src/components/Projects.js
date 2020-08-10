import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { projectsData } from "../data/webData";
import ProjectDetail from "./ProjectDetail";
import ScrollButton from "./ScrollButton";

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
      <ScrollButton />
    </Container>
  );
}

const Container = styled.div({
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
