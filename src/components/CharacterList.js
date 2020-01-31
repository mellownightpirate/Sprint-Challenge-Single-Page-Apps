import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

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
      <div>
        <h2>Characters</h2>
        <Link className="nav-buttons" to={"/"}>
          Back
        </Link>
      </div>
      {characters.map(chara => {
        return <CharacterCard key={chara.id} character={chara} />;
      })}
    </section>
  );
}
