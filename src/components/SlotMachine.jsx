import React, { useState } from "react";

import { Reels } from "./Reels";

import styled from "styled-components";
import { randomIndex } from "./utils";
import SpinButton from "./SpinButton";

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
  const [isSpinning, setIsSpinning] = useState(false);

  const reelValues = [topRow, middleRow, bottomRow];
  console.log("reelValues", reelValues);

  function handleSpinButton() {
    setIsSpinning(true);
    //set the message to empty
    setMessageWinner("");

    //shift the rows
    setBottomRow(middleRow);
    setMiddleRow(topRow);
    setTopRow(randomIndex());

    //finish spinning
    setIsSpinning(false);
  }

  return (
    <div className="slot-machine">
      {/* // Message */}
      <StyledMessage>{messageWinner}</StyledMessage>

      {/* // Reels */}
      <Reels reelValues={reelValues} />
      <SpinButton handleSpinButton={handleSpinButton} isSpinning={isSpinning} />
    </div>
  );
};

export default SlotMachine;
