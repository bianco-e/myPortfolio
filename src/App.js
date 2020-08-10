import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import ChooseLanguage from "./components/ChooseLanguage";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Context from "./context/LanguageContext";

export default function App() {
  const { language } = useContext(Context);

  return (
    <Wrapper>
      <Nav lang={language}>
        <ChooseLanguage />
      </Nav>
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
