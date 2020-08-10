import React from "react";
import styled from "styled-components";
import TechsLogos from "./TechsLogos";

export default function ProjectDetail({ project, lang }) {
  const { deploy, description, name, preview, techs } = project;

  return (
    <ProjectButton href={deploy} target="blank">
      <Preview src={preview} />
      <Name>{name}</Name>
      <Description>{description[lang]}</Description>
      <TechsLogos logos={techs} />
    </ProjectButton>
  );
}

const ProjectButton = styled.a({
  alignItems: "center",
  background: "none",
  borderRadius: "10px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  textDecoration: "none",
  width: "25%",
});
const Name = styled.h4({
  color: "whitesmoke",
  margin: "10px",
  transition: "color .3s ease",
  ["&:hover"]: {
    color: "#ccc",
  },
});
const Preview = styled.img({
  height: "60px",
  width: "100px",
});
const Description = styled.p({
  color: "white",
  fontSize: "13px",
  height: "50px",
  margin: "0",
  overflow: "hidden",
  textAlign: "center",
});
