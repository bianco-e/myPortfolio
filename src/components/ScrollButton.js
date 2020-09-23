import React from "react";
import styled from "styled-components";
import DownArrow from "../svg/DownArrow";

export default function ScrollButton({ refToScroll }) {
  const scrollToRef = () => {
    window.scrollTo(0, refToScroll.current.offsetTop - 40);
  };

  return (
    <Button onClick={() => scrollToRef()}>
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
