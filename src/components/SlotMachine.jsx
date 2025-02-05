import React, { createContext, useContext, useState } from "react";

import { Reels } from "./Reels";
// import SpinButton from "./SpinButton";
// import Bet from "./Bet";
// import Balance from "./Balance";
import styled from "styled-components";
import { randomIndex } from "./utils";

// const spinContext = createContext();

const StyledMessage = styled.h1`
  font-size: 2em;
  color: red;
  text-align: center;
  font-family: "Roboto", sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
`;







// export function SpinProvider({ children }) {

  

//   const [isSpinning, setIsSpinning] = useState(false);
//   const [messageWinner, setMessageWinner] = useState("");
//   const [balance, setBalance] = useState(100);
//   const [betAmount, setBetAmount] = useState(1);

//   function handleSpinButton() {
//     const spinDuration = 2500; // How long it should "spin"
//     const spinInterval = 20; // Speed of changing images

//     const interval = setInterval(() => {
//       setTopRow(randomIndex());
//       setMiddleRow(randomIndex());
//       setBottomRow(randomIndex());
//     }, spinInterval);

//     const newTopRow = randomIndex();
//     const newMiddleRow = [topRow[2], topRow[1], topRow[0]];
//     const newBottomRow = [topRow[1], topRow[0], topRow[2]];
//     setMessageWinner("");
//     setIsSpinning(true);
//     setTimeout(() => {
//       clearInterval(interval);
//       setTopRow(newTopRow);
//       setMiddleRow(newMiddleRow);
//       setBottomRow(newBottomRow);
//       setIsSpinning(false);
//       const isWinner = checkWin(newTopRow, newMiddleRow, newBottomRow);
//       setBalance((prevBalance) =>
//         isWinner ? prevBalance + betAmount * 2 : prevBalance - betAmount
//       );
//     }, spinDuration);

//     function checkWin(topRow, middleRow, bottomRow) {
//       if (topRow[0] === topRow[1] && topRow[1] === topRow[2]) {
//         setMessageWinner("WINNER!");
//         return true;
//       } else if (
//         middleRow[0] === middleRow[1] &&
//         middleRow[1] === middleRow[2]
//       ) {
//         setMessageWinner("WINNER!");
//         return true;
//       } else if (
//         bottomRow[0] === bottomRow[1] &&
//         bottomRow[1] === bottomRow[2]
//       ) {
//         setMessageWinner("WINNER!");
//         return true;
//       } else {
//         setMessageWinner("Not a winner. Try again!");
//         return false;
//       }
//     }
//   }

//   return (
//     <spinContext.Provider
//       value={{
//         items,
//         topRow,
//         middleRow,
//         bottomRow,
//         isSpinning,
//         messageWinner,
//         balance,
//         betAmount,
//         handleSpinButton,
//         setBalance,
//         setBetAmount,
//       }}
//     >
//       {children}
//     </spinContext.Provider>
//   );
// }

// export function useSpin() {
//   const value = useContext(spinContext);

//   if (value === undefined) {
//     throw new Error("useSpin must be used within a SpinProvider");
//   }
//   return value;
// }

const SlotMachine = () => {
  // Initialize with top, middle, bottom row with random index
  const [topRow, setTopRow] = useState(randomIndex());
  const [middleRow, setMiddleRow] = useState(randomIndex());
  const [bottomRow, setBottomRow] = useState(randomIndex());
  const [messageWinner, setMessageWinner] = useState("");

  const reelValues = [topRow, middleRow, bottomRow];
  console.log('reelValues', reelValues);




  return (
    // <SpinProvider>
    //   <div className="slot-machine">
    //     <StyledReelContainer>
    //       <Reels />
    //     </StyledReelContainer>
    //     <SpinButton />
    //     <Bet />
    //     <Balance />
    //   </div>
    // </SpinProvider>
    <div className="slot-machine">
      // Message
      <StyledMessage>{messageWinner}</StyledMessage>

      // Reels
      <Reels reelValues={reelValues} />
      </div>
  );
};

export default SlotMachine;
