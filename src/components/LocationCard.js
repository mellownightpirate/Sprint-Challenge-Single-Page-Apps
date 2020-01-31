import React from "react";
import styled from "styled-components";

export default function LocationCard(props) {
  console.log(props.location);
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

  const Pic = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100px;
  `;

  const Info = styled.div`
  margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: left;
  `;


  return (
    <Container>
      <Card>
        <Info>
          <div>Name: {props.location.name}</div>
          <div>Type: {props.location.type}</div>
          <div>Dimension: {props.location.dimension}</div>
        </Info>
      </Card>
    </Container>
  );
}


