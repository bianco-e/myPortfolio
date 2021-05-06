import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Media from "react-media";
import TechsLogos from "./TechsLogos";
import DownArrow from "../svg/DownArrow";
import SeeRepo from "./SeeRepo";

export default function ProjectDetail({ project, lang }) {
  const { deploy, description, name, preview, repos, techs } = project;
  const [expand, setExpand] = useState(false);

  return (
    <>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 860px)",
        }}
      >
        {(matches) => (
          <Fragment>
            <ProjectBox
              height="330px"
              width={matches.small ? "80%" : matches.medium ? "40%" : "19%"}
            >
              <ProjectLink href={deploy} target="blank">
                <Preview src={preview} />
                <Name>{name}</Name>
              </ProjectLink>
              <Description
                height={!expand ? "47px" : undefined}
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
          </Fragment>
        )}
      </Media>
    </>
  );
}

const ProjectBox = styled.section({
  alignItems: "center",
  background: "none",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  height: (props) => props.height,
  padding: "0 60px",
  transition: "all 0.4s ease",
  width: (props) => props.width,
  ["&:hover"]: {
    transform: "scale(1.03)",
  },
});
const ProjectLink = styled.a({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
});
const Name = styled.h4({
  color: "whitesmoke",
  margin: "10px",
  transition: "color .3s ease",
  ["&:hover"]: {
    color: "#888",
  },
});
const ReposContainer = styled.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-around",
  width: "25%",
});
const Preview = styled.img({
  height: "70px",
  width: "140px",
});
const Description = styled.p({
  color: "white",
  fontSize: "13px",
  height: (props) => props.height,
  margin: "0",
  overflow: (props) => props.overflow,
  textAlign: "center",
});
const ExpandButton = styled.button({
  background: "none",
  border: "0",
  color: "white",
  cursor: "pointer",
  fontSize: "18px",
  transform: (props) => `rotate(${props.rotation}deg)`,
  transition: "all 0.3s ease",
});
