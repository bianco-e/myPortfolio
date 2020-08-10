import React from "react";
import styled from "styled-components";
import DownArrow from "./DownArrow";

export default function ScrollButton() {
  return (
    <Button onClick={() => {}}>
      <DownArrow width={100} />
    </Button>
  );
}

const Button = styled.button({
  background: "none",
  border: "0",
  cursor: "pointer",
  marginTop: "75px",
});
