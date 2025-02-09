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
  const [topRow, setTopRow] = useState(randomIndex());
  const [middleRow, setMiddleRow] = useState(randomIndex());
  const [bottomRow, setBottomRow] = useState(randomIndex());
  const [messageWinner, setMessageWinner] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const reelValues = [topRow, middleRow, bottomRow];

  function handleSpinButton() {
    setIsSpinning(true);

    setMessageWinner("");

    setBottomRow(middleRow);
    setMiddleRow(topRow);
    setTopRow(randomIndex());

    setIsSpinning(false);
  }

  return (
    <div className="slot-machine">
      <StyledMessage>{messageWinner}</StyledMessage>

      <Reels reelValues={reelValues} />

      <SpinButton handleSpinButton={handleSpinButton} isSpinning={isSpinning} />
    </div>
  );
};

export default SlotMachine;
