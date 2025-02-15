import styled from "styled-components";
import { useSpin } from "./SlotMachine";

const StyledButton = styled.button`
  padding: 20px;
  border-radius: 10px;
  border: 0;
  font-size: 2em;
  background-color: ${(props) => (props.disabled === false ? "red" : "gray")};
  color: blue;
  &:hover {
    border-top: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-bottom: 2px solid rgb(238, 103);
    border-right: 2px solid rgb(238, 103);
    box-shadow: rgba(30, 8, 78, 0.4) 5px 5px, rgba(46, 11, 95, 0.3) 10px 10px,
      rgba(72, 12, 96, 0.2) 15px 15px;
  }
`;

function SpinButton() {
  const { isSpinning, balance, messageWinner, handleSpinButton } = useSpin();
  return (
    <StyledButton
      disabled={isSpinning || balance === 0 ? true : false}
      onClick={handleSpinButton}
    >
      {messageWinner ? "Play again" : "SPIN"}
    </StyledButton>
  );
}

export default SpinButton;
