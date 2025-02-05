import styled from "styled-components";
import Slot from "./Slot";

import { useSpin } from "./SlotMachine";

const StyledReel = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1px;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
`;

const StyledMessage = styled.h1`
  font-size: 2em;
  color: red;
  text-align: center;
  font-family: "Roboto", sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default function Reels() {
  const { topRow, items, messageWinner, middleRow, bottomRow } = useSpin();

  return (
    <>
      <StyledMessage>{messageWinner}</StyledMessage>

      <StyledReel>
        {topRow.map((slotIndex, index) => (
          <Slot key={index} index={index} slotIndex={slotIndex} items={items} />
        ))}
      </StyledReel>

      <StyledReel>
        {middleRow.map((slotIndex, index) => (
          <Slot key={index} index={index} slotIndex={slotIndex} items={items} />
        ))}
      </StyledReel>
      <StyledReel>
        {bottomRow.map((slotIndex, index) => (
          <Slot key={index} index={index} slotIndex={slotIndex} items={items} />
        ))}
      </StyledReel>
    </>
  );
}
