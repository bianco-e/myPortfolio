import React from "react";
import styled from "styled-components";

export default function Title({ content }) {
  return <Text>{content}</Text>;
}

const Text = styled.h2({
  fontSize: "35px",
  color: "white",
});
