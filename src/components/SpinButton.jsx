import styled from "styled-components";

const StyledButton = styled.button`
  padding: 20px;
  border-radius: 10px;
  border: 0;
  font-size: 2em;
  background-color: ${(props) => (props.disabled === false ? "red" : "gray")};
  color: blue;
`;

function SpinButton({ isSpinning, handleSpinButton, messageWinner }) {
  return (
    <StyledButton disabled={isSpinning} onClick={handleSpinButton}>
      {messageWinner ? "Play again" : "SPIN"}
    </StyledButton>
  );
}

export default SpinButton;
