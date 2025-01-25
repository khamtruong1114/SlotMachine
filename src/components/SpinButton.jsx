import styled from "styled-components";
import { useSpin } from "../context/useSpin";

const StyledButton = styled.button`
  padding: 20px;
  border-radius: 10px;
  border: 0;
  font-size: 2em;
  background-color: ${(props) => (props.disabled === false ? "red" : "gray")};
  color: blue;
`;

function SpinButton() {
  const { balance, isSpinning, handleSpinButton, messageWinner } = useSpin();
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
