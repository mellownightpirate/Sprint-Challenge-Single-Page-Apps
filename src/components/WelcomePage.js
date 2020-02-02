import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
font-family: 'Comfortaa', cursive;
`;

export default function WelcomePage() {
  return (
    <Section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link className="nav-buttons" to={"/characters"}>
          Characters
        </Link>
        <Link className="nav-buttons" to={"/locations"}>
          Locations
        </Link>
      </header>
    </Section>
  );
}
