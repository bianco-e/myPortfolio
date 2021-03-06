import React from "react";
import styled from "styled-components";

export default function TechsLogos({ logos }) {
  return (
    <LogosGroup>
      {logos.map((logo) => {
        return <Logo key={logo} src={logo} />;
      })}
    </LogosGroup>
  );
}

const LogosGroup = styled.section({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-around",
  margin: "10px 0",
  width: "100%",
});
const Logo = styled.img({
  height: "20px",
  width: "20px",
});
