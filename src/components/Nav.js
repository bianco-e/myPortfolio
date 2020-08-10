import React, { useContext } from "react";
import styled from "styled-components";
import { navData } from "../data/webData";

export default function Nav({ children, lang }) {
  return (
    <Header>
      {navData.map((sectionData) => {
        return (
          <Link href="#" key={sectionData.en}>
            {sectionData[lang]}
          </Link>
        );
      })}
      {children}
    </Header>
  );
}

const Header = styled.header({
  backgroundColor: "#111",
  display: "flex",
  justifyContent: "center",
  padding: "25px 0",
  position: "sticky",
  top: "0",
  width: "100%",
});
const Link = styled.a({
  color: "white",
  fontSize: "32px",
  margin: "0 35px",
  textDecoration: "none",
  transition: "text-shadow .3s ease",
  ["&:hover"]: {
    textDecoration: "none",
    textShadow: "0 0 12px rgba(255, 255, 255, .7)",
  },
});
