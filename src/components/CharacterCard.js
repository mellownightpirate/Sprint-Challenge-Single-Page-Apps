import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  const Container = styled.div`
    width: 100%;
  `;

  const Card = styled.div`
    margin: 20px auto;
    font-family: "Comfortaa", cursive;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 50%;
    padding: 10px;
    border-radius: 100px;
  `;

  const ProfilePic = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100px;
  `;

  const Bio = styled.div`
  margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: left;
  `;

  const Status = styled.div`
    vertical-align: middle;
  `;

  return (
    <Container>
      <Card>
        <ProfilePic src={props.character.image} />
        <Bio>
          <div>Name: {props.character.name}</div>
          <div>Gender: {props.character.gender}</div>
          <div>Species: {props.character.species}</div>
          <div>Origin: {props.character.origin.name}</div>
        </Bio>
        <Status>Status: {props.character.status}</Status>
      </Card>
    </Container>
  );
}