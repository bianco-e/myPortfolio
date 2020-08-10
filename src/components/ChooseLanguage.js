import React from "react";
import styled from "styled-components";
import SpainFlag from "../images/spanish.png";
import UKFlag from "../images/english.png";

export default function ChooseLanguage({
  height,
  language,
  setLanguage,
  width,
}) {
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
          height={height}
          src={langSwitch[language].flag}
          title={langSwitch[language].title}
          width={width}
        />
      </Button>
    </Container>
  );
}

const Container = styled.div({
  position: "absolute",
  right: "2%",
  top: "38%",
});
const Button = styled.button({
  background: "none",
  border: "0",
  cursor: "pointer",
  padding: "0",
});
const Flag = styled.img({
  height: (props) => props.height,
  width: (props) => props.width,
});
