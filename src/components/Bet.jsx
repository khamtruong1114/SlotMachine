import styled from "styled-components";
import { formatCurrency } from "../utils/helpers";
import { useSpin } from "./SlotMachine";

const Label = styled.label`
  font-weight: 500;
  font-size: 20px;
  color: #f44336;
  margin-top: 5px;
  margin-bottom: 10px;
  display: block;
  text-align: center;
  width: 100%;
  font-family: "Roboto", sans-serif;
  gap: 10px;
`;

const Input = styled.input`
  width: 20%;
  padding: 8px;
  margin: 5px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
`;

const Button = styled.button`
  background-color: #f44336;
  color: white;
  padding: 10px 24px;
  margin: 5px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  font-size: 16px;
  width: 10%;
  font-weight: 500;
  &:hover {
    background-color: #f44336;
  }
`;

function Bet() {
  const { betAmount, setBetAmount } = useSpin();
  const betAmountStep = [1, 5, 10, 20, 50, 100];

  function handleChange(event) {
    const { value } = event.target;
    setBetAmount(value);
  }

  function handleIncrement() {
    const nextBetStep = betAmountStep.find((step) => step > betAmount);
    setBetAmount(nextBetStep || betAmountStep[betAmountStep.length - 1]);
  }

  function handleDecrement() {
    const prevBetIndex = betAmountStep.indexOf(betAmount) - 1;
    const prevBetStep = betAmountStep[prevBetIndex];
    setBetAmount(prevBetStep || betAmountStep[0]);
  }

  return (
    <div>
      <Button onClick={handleDecrement}>-</Button>

      <Input
        disabled={true}
        value={formatCurrency(betAmount)}
        onChange={handleChange}
      />
      <Button onClick={handleIncrement}>+</Button>
      <Label>BET</Label>
    </div>
  );
}

export default Bet;
