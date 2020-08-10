import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Title from "./Title";
import { contactData, feedbackData } from "../data/webData";

export default function Contact({ lang, setContactRef }) {
  const { title, channels } = contactData;
  const { copied } = feedbackData;
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [copyMessage, setCopyMessage] = useState(undefined);
  var contactRef = useRef(null);

  useEffect(() => {
    setContactRef(contactRef);
  }, [contactRef]);

  const copyText = (email) => {
    setCopyFeedback(!copyFeedback);
    navigator.clipboard.writeText(email).then(setCopyMessage(copied[lang]));
  };
  return (
    <Container ref={contactRef}>
      <Title content={title[lang]} />
      <ChannelsBox>
        {channels.map((channel) => {
          if (channel?.link) {
            return (
              <ChannelContainer key={channel.icon}>
                <ChannelLink
                  href={channel.link}
                  target="blank"
                  title={channel.title[lang]}
                >
                  <ChannelIcon src={channel.icon} />
                </ChannelLink>
              </ChannelContainer>
            );
          } else
            return (
              <ChannelContainer key={channel.icon}>
                <Button
                  onClick={() => copyText(channel.email)}
                  title={channel.email}
                >
                  {!copyFeedback ? (
                    <ChannelIcon src={channel.icon} />
                  ) : (
                    <CopyFeedback>{copyMessage}</CopyFeedback>
                  )}
                </Button>
              </ChannelContainer>
            );
        })}
      </ChannelsBox>
    </Container>
  );
}

const Container = styled.section({
  alignItems: "center",
  background: "#000",
  bottom: "0",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  width: "100%",
});
const Button = styled.button({
  border: "0",
  background: "none",
  cursor: "pointer",
});
const ChannelContainer = styled.section({
  width: "30%",
  display: "grid",
  placeItems: "center",
});
const ChannelLink = styled.a({});
const ChannelIcon = styled.img({
  height: "30px",
  width: "30px",
});
const ChannelsBox = styled.section({
  display: "flex",
  justifyContent: "space-around",
  paddingBottom: "20px",
  width: "100%",
});
const CopyFeedback = styled.p({
  fontSize: "14px",
  margin: "0",
});
