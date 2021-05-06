import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Title from "./Title";
import TextBox from "./TextBox";
import TechsLogos from "./TechsLogos";
import ScrollButton from "./ScrollButton";
import { aboutMeData, techsLogos } from "../data/webData";

export default function AboutMe({ lang, refToScroll, setAboutmeRef }) {
  const { text, title } = aboutMeData;
  var aboutmeRef = useRef(null);

  useEffect(() => {
    setAboutmeRef(aboutmeRef);
  }, [aboutmeRef]); //eslint-disable-line

  return (
    <Container ref={aboutmeRef}>
      <Title content={title[lang]} />
      <TextBox content={text[lang]} />
      <TechsLogos logos={techsLogos} />
      <ScrollButton refToScroll={refToScroll} />
    </Container>
  );
}

const Container = styled.section({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
