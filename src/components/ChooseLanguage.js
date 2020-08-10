import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../context/LanguageContext";
import SpainFlag from "../images/spanish.png";
import UKFlag from "../images/english.png";

export default function ChooseLanguage() {
  const { language, setLanguage } = useContext(Context);

  const handleClick = () => {
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
      <Button onClick={() => handleClick()}>
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
