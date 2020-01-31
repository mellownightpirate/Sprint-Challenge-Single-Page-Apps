import React from "react";
import styled from "styled-components";
const H1 = styled.header`
  font-family: "Comfortaa", cursive;
  font-size: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export default function Header() {
  return (
    <header className="ui centered">
      <H1 className="ui center">Rick &amp; Morty Fan Page</H1>
    </header>
  );
}
