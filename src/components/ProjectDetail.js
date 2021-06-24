import React, { useState } from "react";
import styled from "styled-components";
import TechsLogos from "./TechsLogos";
import DownArrow from "../svg/DownArrow";
import SeeRepo from "./SeeRepo";
import { LARGE_RESPONSIVE_BREAK } from "../utils/constants";

export default function ProjectDetail({ project, lang }) {
  const { deploy, description, name, preview, repos, techs } = project;
  const [expand, setExpand] = useState(false);

  return (
    <ProjectBox>
      <ProjectLink href={deploy} target="blank">
        <Preview src={preview} />
        <Name>{name}</Name>
      </ProjectLink>
      <Description
        height={!expand ? "35px" : "300px"}
        overflow={expand ? "visible" : "hidden"}
      >
        {description[lang]}
      </Description>
      {description[lang].length > 90 && (
        <ExpandButton
          rotation={expand ? "180" : "0"}
          onClick={() => setExpand(!expand)}
        >
          <DownArrow width={18} />
        </ExpandButton>
      )}
      <ReposContainer>
        {repos.map((repo) => (
          <SeeRepo repo={repo} />
        ))}
      </ReposContainer>
      <TechsLogos logos={techs} />
    </ProjectBox>
  );
}

const ProjectBox = styled.div`
  align-items: center;
  background: none;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 360px;
  margin: 10px 0;
  padding: 0 30px;
  transition: all 0.4s ease;
  width: 430px;
  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: ${LARGE_RESPONSIVE_BREAK}) {
    width: 100%;
  }
`;

const ProjectLink = styled.a({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
});
const Name = styled.h4`
  color: whitesmoke;
  font-size: 18px;
  margin: 10px;
  transition: color 0.3s ease;
  &:hover {
    color: #e1e1e1;
  }
`;
const ReposContainer = styled.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-around",
  width: "25%",
});
const Preview = styled.img`
  max-height: 200px;
  width: 60%;
  max-width: 380px;
`;
const Description = styled.span`
  color: white;
  font-size: 15px;
  max-height: ${({ height }) => height};
  overflow: ${({ overflow }) => overflow};
  text-align: center;
  transition: all 0.4s ease;
  max-width: 500px;
`;
const ExpandButton = styled.button({
  background: "none",
  border: "0",
  color: "white",
  cursor: "pointer",
  fontSize: "18px",
  transform: (props) => `rotate(${props.rotation}deg)`,
  transition: "all 0.3s ease",
});
