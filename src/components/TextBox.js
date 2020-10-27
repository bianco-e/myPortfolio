import React, { Fragment } from "react";
import Media from "react-media";
import styled from "styled-components";

export default function TextBox({ content }) {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 860px)"
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
  borderRadius: "2px",
  padding: "20px 0",
  width: "90%",
  textAlign: "center"
});
const Text = styled.p({
  color: "white",
  fontSize: (props) => props.fSize,
  lineHeight: (props) => props.lHeight,
  margin: "0"
});
