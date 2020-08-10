import React from "react";
import styled from "styled-components";

export default function TextBox({ content }) {
  return (
    <Container>
      {content.map((p) => (
        <Text key={p}>{p}</Text>
      ))}
    </Container>
  );
}

const Container = styled.section({
  backgroundColor: "#444",
  borderRadius: "2px",
  padding: "20px 35px",
  width: "80%",
});
const Text = styled.p({
  color: "white",
  fontSize: "18px",
  lineHeight: "30px",
  margin: "0",
  textAlign: "center",
});
