import styled from "styled-components";
import Slot from "./Slot";
import SpinButton from "./SpinButton";
import { useSpin } from "../context/useSpin";

// const spinAnimation = keyframes`
//  0% {
//     transform: translateY(0);
//   }
//   100% {
//     transform: translateY(-100%);
//   }`;

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
  animation: spin 5s ease-in-out;
`;

const StyledMessage = styled.h1`
  color: pink;
  font-size: 80px;
  font-weight: bold;
`;

export default function Reels() {
  const { items, spinIndex, messageWinner } = useSpin();

  const reel1 = spinIndex[0];
  const reel2 = spinIndex[1];
  const reel3 = spinIndex[2];

  return (
    <>
      <StyledMessage>{messageWinner}</StyledMessage>
      <StyledReelContainer>
        <StyledReel>
          {Array.isArray(reel1) &&
            reel1.map((slotIndex, index) => (
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
        <StyledReel>
          {reel3.map((slotIndex, index) => (
            <Slot index={index} slotIndex={slotIndex} items={items} />
          ))}
        </StyledReel>
        <StyledReel>
          {reel3.map((slotIndex, index) => (
            <Slot index={index} slotIndex={slotIndex} items={items} />
          ))}
        </StyledReel>
      </StyledReelContainer>
      <SpinButton />
    </>
  );
}
