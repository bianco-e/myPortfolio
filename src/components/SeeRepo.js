import React from "react";
import styled from "styled-components";
import GitHubSVG from "../svg/GitHubSVG";
import LockSvg from "../svg/LockSvg.js";

export default function SeeRepo({ repo }) {
  return (
    <>
      {repo != "Private" ? (
        <RepoLink href={repo} target="blank">
          <GitHubSVG />
        </RepoLink>
      ) : (
        <LockSvg />
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
