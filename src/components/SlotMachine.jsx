import React, { createContext, useContext, useState } from "react";
import seven from "../assets/images/7.jpg";
import cherry from "../assets/images/cherry.jpg";
import star from "../assets/images/star.jpg";
import Reels from "./Reels";
import SpinButton from "./SpinButton";
import Bet from "./Bet";
import Balance from "./Balance";
import styled from "styled-components";

const spinContext = createContext();
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
export function SpinProvider({ children }) {
  const items = [seven, cherry, star];
  const randomIndex = () =>
    Array.from({ length: 3 }, () => Math.floor(Math.random() * items.length));

  const [topRow, setTopRow] = useState(randomIndex);
  const [middleRow, setMiddleRow] = useState(randomIndex);
  const [bottomRow, setBottomRow] = useState(randomIndex);

  const [isSpinning, setIsSpinning] = useState(false);
  const [messageWinner, setMessageWinner] = useState("");
  const [balance, setBalance] = useState(100);
  const [betAmount, setBetAmount] = useState(1);

  function handleSpinButton() {
    const newTopRow = randomIndex();
    const newMiddleRow = [topRow[2], topRow[1], topRow[0]];
    const newBottomRow = [topRow[1], topRow[0], topRow[2]];
    setMessageWinner("");
    setIsSpinning(true);
    setTimeout(() => {
      setTopRow(newTopRow);
      setMiddleRow(newMiddleRow);
      setBottomRow(newBottomRow);
      setIsSpinning(false);
      const isWinner = checkWin(newTopRow, newMiddleRow, newBottomRow);
      setBalance((prevBalance) =>
        isWinner ? prevBalance + betAmount * 2 : prevBalance - betAmount
      );
    }, 2000);

    function checkWin(topRow, middleRow, bottomRow) {
      if (topRow[0] === topRow[1] && topRow[1] === topRow[2]) {
        setMessageWinner("WINNER!");
        return true;
      } else if (
        middleRow[0] === middleRow[1] &&
        middleRow[1] === middleRow[2]
      ) {
        setMessageWinner("WINNER!");
        return true;
      } else if (
        bottomRow[0] === bottomRow[1] &&
        bottomRow[1] === bottomRow[2]
      ) {
        setMessageWinner("WINNER!");
        return true;
      } else {
        setMessageWinner("Not a winner. Try again!");
        return false;
      }
    }
  }

  return (
    <spinContext.Provider
      value={{
        items,
        topRow,
        middleRow,
        bottomRow,
        isSpinning,
        messageWinner,
        balance,
        betAmount,
        handleSpinButton,
        setBalance,
        setBetAmount,
      }}
    >
      {children}
    </spinContext.Provider>
  );
}

export function useSpin() {
  const value = useContext(spinContext);

  if (value === undefined) {
    throw new Error("useSpin must be used within a SpinProvider");
  }
  return value;
}

const SlotMachine = () => {
  return (
    <SpinProvider>
      <div className="slot-machine">
        <StyledReelContainer>
          <Reels />
        </StyledReelContainer>
        <SpinButton />
        <Bet />
        <Balance />
      </div>
    </SpinProvider>
  );
};

export default SlotMachine;
