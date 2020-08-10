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
  display: "flex",
});
const Logo = styled.img({
  height: "20px",
  margin: "10px 20px",
  width: "20px",
});
