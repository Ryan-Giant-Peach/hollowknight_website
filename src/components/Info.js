import React from "react";
import styled from "styled-components";

function Info() {
  return (
    <Text>
      <p>
        Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom.{" "}
      </p>{" "}
      <p>Many are drawn beneath the surface, searching for riches, or
      glory, or answers to old secrets.
      </p>
      <p>
      As the enigmatic Knight, you'll traverse the depths, unravel its mysteries
      and conquer its evils.
      </p>
    </Text>
  );
}

export default Info;

const Text = styled.div`
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: black;
  opacity: 0.8;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  `;
