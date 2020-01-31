import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const H2 = styled.header`
  margin-top: 10px;
  font-family: "Comfortaa", cursive;
  font-weight: bold;
`;

const Div = styled.div`
  /* flex-wrap: wrap;
  justify-content: space-evenly; */
`;


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(e => console.log(e))
      .finally(() => {
        console.log("Axios request finished.");
      });
  }, []);

  return (
    <section className="character-list">
      <Div>
        <H2>Characters</H2>
        <Link className="nav-buttons" to={"/"}>
          Back
        </Link>
      </Div>
      {characters.map(chara => {
        return <CharacterCard key={chara.id} character={chara} />;
      })}
    </section>
  );
}
