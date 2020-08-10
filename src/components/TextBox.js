import React, { Fragment } from "react";
import Media from "react-media";
import styled from "styled-components";

export default function TextBox({ content, fSize, lHeight }) {
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
            <Container>
              {content.map((p) => (
                <Text
                  key={p}
                  fSize={
                    matches.small ? "12px" : matches.medium ? "15px" : "18px"
                  }
                  lHeight={
                    matches.small ? "20px" : matches.medium ? "22px" : "30px"
                  }
                >
                  {p}
                </Text>
              ))}
            </Container>
          </Fragment>
        )}
      </Media>
    </>
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
  fontSize: (props) => props.fSize,
  lineHeight: (props) => props.lHeight,
  margin: "0",
  textAlign: "center",
});
