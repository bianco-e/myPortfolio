import React, { useRef } from "react";
import styled from "styled-components";
import Title from "./Title";
import TextBox from "./TextBox";
import TechsLogos from "./TechsLogos";
import ScrollButton from "./ScrollButton";
import { aboutMeData, techsLogos } from "../data/webData";

export default function AboutMe({ lang }) {
  const { text, title } = aboutMeData;

  return (
    <Container>
      <Title content={title[lang]} />
      <TextBox content={text[lang]} />
      <TechsLogos logos={techsLogos} />
      <ScrollButton />
    </Container>
  );
}

const Container = styled.div({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
