import React, { useState } from "react";
import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import ScrollButton from "./components/ScrollButton";
import { nameData } from "./data/webData";

export default function App() {
  const { name, job } = nameData;
  const [language, setLanguage] = useState("es");
  const [aboutmeRef, setAboutmeRef] = useState(undefined);
  const [projectsRef, setProjectsRef] = useState(undefined);
  const [contactRef, setContactRef] = useState(undefined);

  return (
    <Wrapper>
      <Nav
        lang={language}
        setLanguage={setLanguage}
        refs={{ aboutmeRef, projectsRef, contactRef }}
      />
      <NameBox>
        <NameText>{name}</NameText>
        <JobText>{job[language]}</JobText>
        <ScrollButton refToScroll={aboutmeRef} />
      </NameBox>
      <AboutMe
        lang={language}
        refToScroll={projectsRef}
        setAboutmeRef={setAboutmeRef}
      />
      <Projects
        lang={language}
        refToScroll={contactRef}
        setProjectsRef={setProjectsRef}
      />
      <Contact lang={language} setContactRef={setContactRef} />
    </Wrapper>
  );
}

const Wrapper = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
});
const NameBox = styled.section({
  display: "flex",
  flexDirection: "column",
  padding: "90px 0",
  textAlign: "center",
});
const NameText = styled.p({
  color: "#222",
  fontSize: "50px",
  fontWeight: "800",
  textShadow: "1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff",
});
const JobText = styled.i({
  color: "#fff",
  fontSize: "20px",
  fontWeight: "700",
  marginBottom: "35px",
});
