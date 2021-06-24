import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Title from "./Title";
import TextBox from "./TextBox";
import TechsLogos from "./TechsLogos";
import ScrollButton from "./ScrollButton";
import { aboutMeData, techsLogos } from "../data/webData";
import { LARGE_RESPONSIVE_BREAK } from "../utils/constants";

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

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 950px;
  @media (max-width: ${LARGE_RESPONSIVE_BREAK}) {
    width: 100%;
  }
`;
