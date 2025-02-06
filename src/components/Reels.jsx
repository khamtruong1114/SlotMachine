import styled from "styled-components";
import { Slot } from "./Slot";

import { useSpin } from "./SlotMachine";

const StyledReelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f1f1f1;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin-top: 50px;
`;

const StyledReel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
`;

export const Reels = (props) => {
  const { reelValues } = props;
  console.log("reelValues", reelValues);
  // const { topRow, items, messageWinner, middleRow, bottomRow } = useSpin();

  return (
    <StyledReelContainer>
      {reelValues.map((row, rowIndex) => (
        <StyledReel key={rowIndex}>
          {row.map((value, colIndex) => (
            <Slot key={colIndex} value={value} />
          ))}
        </StyledReel>
      ))}
    </StyledReelContainer>
  );
};
