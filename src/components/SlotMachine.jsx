import React, { createContext, useContext, useState } from "react";

import { Reels } from "./Reels";

import styled from "styled-components";
import { randomIndex } from "./utils";

const StyledMessage = styled.h1`
  font-size: 2em;
  color: red;
  text-align: center;
  font-family: "Roboto", sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SlotMachine = () => {
  // Initialize with top, middle, bottom row with random index
  const [topRow, setTopRow] = useState(randomIndex());
  const [middleRow, setMiddleRow] = useState(randomIndex());
  const [bottomRow, setBottomRow] = useState(randomIndex());
  const [messageWinner, setMessageWinner] = useState("");

  const reelValues = [topRow, middleRow, bottomRow];
  console.log("reelValues", reelValues);

  return (
    <div className="slot-machine">
      // Message
      <StyledMessage>{messageWinner}</StyledMessage>
      // Reels
      <Reels reelValues={reelValues} />
    </div>
  );
};

export default SlotMachine;
