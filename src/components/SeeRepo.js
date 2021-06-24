import React from "react";
import styled from "styled-components";
import GitHubSVG from "../svg/GitHubSVG";
import LockSvg from "../svg/LockSvg.js";

export default function SeeRepo({ repo }) {
  return (
    <>
      {repo !== "Private" ? (
        <RepoLink href={repo} target="blank">
          <GitHubSVG height={30} width={30} />
        </RepoLink>
      ) : (
        <LockSvg />
      )}
    </>
  );
}
const RepoLink = styled.a({
  margin: "6px 0 3px 0",
});
