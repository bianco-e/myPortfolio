import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { contactData } from "../data/webData";

export default function Contact({ lang }) {
  const { title, channels } = contactData;
  return (
    <Container>
      <Title content={title[lang]} />
      <ChannelsBox>
        {channels.map((channel) => {
          return (
            <ChannelLink key={channel.link} href={channel.link}>
              <ChannelIcon src={channel.icon} />
            </ChannelLink>
          );
        })}
      </ChannelsBox>
    </Container>
  );
}

const Container = styled.div({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const ChannelLink = styled.a({});
const ChannelIcon = styled.img({
  height: "30px",
  width: "30px",
});
const ChannelsBox = styled.section({
  background: "#000",
  bottom: "0",
  display: "flex",
  justifyContent: "space-around",
  padding: "20px 0",
  position: "absolute",
  width: "100%",
});
