import React, { useState } from "react";
import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import ScrollButton from "./components/ScrollButton";
import { nameData } from "./data/webData";

export default function App() {
  const [language, setLanguage] = useState("es");
  const { name, job } = nameData;

  return (
    <Wrapper>
      <Nav lang={language} setLanguage={setLanguage} />
      <NameBox>
        <NameText>{name}</NameText>
        <JobText>{job[language]}</JobText>
        <ScrollButton />
      </NameBox>
      <AboutMe lang={language} />
      <Projects lang={language} />
      <Contact lang={language} />
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
  color: "#222",
  fontSize: "20px",
  fontWeight: "600",
  marginBottom: "30px",
  textShadow: "1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff",
});
