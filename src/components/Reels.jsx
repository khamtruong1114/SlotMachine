import { useState } from "react";
import seven from "../assets/images/7.jpg";
import cherry from "../assets/images/cherry.jpg";
import star from "../assets/images/star.jpg";
import styled, { keyframes } from "styled-components";
import Slot from "./Slot";
import SpinButton from "./SpinButton";

const spinAnimation = keyframes`
 0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }`;

const StyledReelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow: hidden;
  height: 250px; /* Adjust to match the size of your slot images */
  justify-content: center;
  align-content: center;
`;

const StyledReel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 80px;
  border: 1px solid black;
  animation: ${(props) =>
    props.isSpinning ? `${spinAnimation} 2s ease-in-out infinite` : "none"};
`;

const StyledMessage = styled.h1`
  color: pink;
  font-size: 80px;
  font-weight: bold;
`;

export default function Reels() {
  const [spinIndex, setSpinIndex] = useState([
    [0, 1, 2],
    [2, 1, 0],
    [1, 0, 0],
  ]);
  const [isSpinning, setIsSpinning] = useState(false);

  const items = [seven, cherry, star];

  const [messageWinner, setMessageWinner] = useState("");

  function handleSpinButton() {
    setMessageWinner("");
    setIsSpinning(true);
    setTimeout(() => {
      const randomIndex1 = [
        Math.floor(Math.random() * items.length),
        Math.floor(Math.random() * items.length),
        Math.floor(Math.random() * items.length),
      ];
      const randomIndex2 = [
        Math.floor(Math.random() * items.length),
        Math.floor(Math.random() * items.length),
        Math.floor(Math.random() * items.length),
      ];
      const randomIndex3 = [
        Math.floor(Math.random() * items.length),
        Math.floor(Math.random() * items.length),
        Math.floor(Math.random() * items.length),
      ];
      setSpinIndex([randomIndex1, randomIndex2, randomIndex3]);
      setIsSpinning(false);
      checkWin([randomIndex1, randomIndex2, randomIndex3]);
    }, 2000);
  }

  function checkWin(spinIndex) {
    const middleRow = [spinIndex[0][1], spinIndex[1][1], spinIndex[2][1]];
    if ((middleRow[0] === middleRow[1]) & (middleRow[0] === middleRow[2])) {
      return setMessageWinner("WINNER!");
    } else setMessageWinner("Not a winner. Try again!");
  }

  const reel1 = spinIndex[0];
  const reel2 = spinIndex[1];
  const reel3 = spinIndex[2];

  return (
    <>
      <StyledMessage>{messageWinner}</StyledMessage>
      <StyledReelContainer>
        <StyledReel>
          {reel1.map((slotIndex, index) => (
            <Slot index={index} slotIndex={slotIndex} items={items} />
          ))}
        </StyledReel>
        <StyledReel>
          {reel2.map((slotIndex, index) => (
            <Slot index={index} slotIndex={slotIndex} items={items} />
          ))}
        </StyledReel>
        <StyledReel>
          {reel3.map((slotIndex, index) => (
            <Slot index={index} slotIndex={slotIndex} items={items} />
          ))}
        </StyledReel>
      </StyledReelContainer>
      <SpinButton isSpinning={isSpinning} handleSpinButton={handleSpinButton} />
    </>
  );
}
