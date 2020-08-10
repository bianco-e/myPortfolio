import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Media from "react-media";
import TechsLogos from "./TechsLogos";
import DownArrow from "./DownArrow";

export default function ProjectDetail({ project, lang }) {
  const { deploy, description, name, preview, techs } = project;
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
              height={matches.small || matches.medium ? "300px" : "280px"}
              width={matches.small ? "80%" : matches.medium ? "40%" : "18%"}
            >
              <ProjectLink href={deploy} target="blank">
                <Preview src={preview} />
                <Name>{name}</Name>
              </ProjectLink>
              <Description
                height={!expand ? "50px" : undefined}
                overflow={expand ? "visible" : "hidden"}
              >
                {description[lang]}
              </Description>
              {description[lang].length > 130 && (
                <ExpandButton onClick={() => setExpand(!expand)}>
                  {!expand ? <DownArrow width={15} /> : "-"}
                </ExpandButton>
              )}
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
  width: (props) => props.width,
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
const Preview = styled.img({
  height: "60px",
  width: "100px",
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
});
