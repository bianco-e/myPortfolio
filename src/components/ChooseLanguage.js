import React from "react";
import styled from "styled-components";
import SpainFlag from "../images/spanish.png";
import UKFlag from "../images/english.png";

export default function ChooseLanguage({ language, setLanguage }) {
  const switchLanguage = () => {
    language === "es" ? setLanguage("en") : setLanguage("es");
  };

  const langSwitch = {
    es: {
      flag: UKFlag,
      title: "English",
    },
    en: {
      flag: SpainFlag,
      title: "Español",
    },
  };

  return (
    <Container>
      <Button onClick={() => switchLanguage()}>
        <Flag
          alt={langSwitch[language].title}
          src={langSwitch[language].flag}
          title={langSwitch[language].title}
        />
      </Button>
    </Container>
  );
}

const Container = styled.div({
  position: "absolute",
  right: "3%",
  top: "38%",
});
const Button = styled.button({
  border: "0",
  cursor: "pointer",
  padding: "0",
  background: "none",
});
const Flag = styled.img({
  width: "22px",
  height: "22px",
});
