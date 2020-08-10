import React from "react";
import styled from "styled-components";
import GitHubSVG from "./GitHubSVG";

export default function SeeRepo({ lang, repo }) {
  return (
    <>
      {repo.en !== "Private repo" ? (
        <RepoLink href={repo} target="blank">
          <GitHubSVG />
        </RepoLink>
      ) : (
        <Text>{repo[lang]}</Text>
      )}
    </>
  );
}
const RepoLink = styled.a({
  marginTop: "4px",
});
const Text = styled.a({
  fontSize: "13px",
});
