import React, { Fragment } from "react";
import styled from "styled-components";
import Media from "react-media";
import ChooseLanguage from "./ChooseLanguage";
import { navData } from "../data/webData";

export default function Nav({ lang, refs, setLanguage }) {
  const handleClick = (refToScroll) => {
    window.scrollTo(0, refs[refToScroll].current.offsetTop - 40);
  };

  return (
    <>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 860px)",
        }}
      >
        {(matches) => (
          <Fragment>
            <Header>
              {navData.map((sectionData) => {
                return (
                  <Link
                    onClick={() => handleClick(sectionData.ref)}
                    key={sectionData.en}
                    fSize={matches.small ? "20px" : matches.medium && "24px"}
                    margin={
                      matches.small ? "0 13px" : matches.medium && "0 18px"
                    }
                  >
                    {sectionData[lang]}
                  </Link>
                );
              })}
              <ChooseLanguage
                height={matches.small ? "17px" : "22px"}
                language={lang}
                setLanguage={setLanguage}
                width={matches.small ? "19px" : "24px"}
              />
            </Header>
          </Fragment>
        )}
      </Media>
    </>
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
  cursor: "pointer",
  fontSize: (props) => props.fSize || "32px",
  margin: (props) => props.margin || "0 35px",
  textDecoration: "none",
  transition: "text-shadow .3s ease",
  ["&:hover"]: {
    textDecoration: "none",
    textShadow: "0 0 12px rgba(255, 255, 255, .7)",
  },
});
const Logo = styled.a({
  color: "white",
  cursor: "pointer",
  fontSize: (props) => props.fSize || "16px",
  left: "2%",
  top: "40%",
  position: "absolute",
  textDecoration: "none",
  ["&:hover"]: {
    textDecoration: "none",
  },
});
