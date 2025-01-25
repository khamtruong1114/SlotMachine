import { createContext, useContext, useState } from "react";
import seven from "../assets/images/7.jpg";
import cherry from "../assets/images/cherry.jpg";
import star from "../assets/images/star.jpg";

const spinContext = createContext();

export function SpinProvider({ children }) {
  const items = [seven, cherry, star];
  const [spinIndex, setSpinIndex] = useState([
    [0, 1, 2],
    [2, 1, 0],
    [1, 0, 0],
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [messageWinner, setMessageWinner] = useState("");
  const [balance, setBalance] = useState(100);
  const [betAmount, setBetAmount] = useState(1);

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
      setBalance((balance) => {
        if (messageWinner === "WINNER!") return balance + betAmount;
        return balance - betAmount;
      });
    }, 2000);

    function checkWin(spinIndex) {
      const middleRow = [spinIndex[0][1], spinIndex[1][1], spinIndex[2][1]];
      if ((middleRow[0] === middleRow[1]) & (middleRow[0] === middleRow[2])) {
        return setMessageWinner("WINNER!");
      } else setMessageWinner("Not a winner. Try again!");
    }
  }

  return (
    <spinContext.Provider
      value={{
        spinIndex,
        items,
        isSpinning,
        messageWinner,
        handleSpinButton,
        balance,
        setBalance,
        betAmount,
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
