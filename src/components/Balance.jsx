import styled from "styled-components";
import { useSpin } from "../context/useSpin";
import { formatCurrency } from "../utils/helpers";

const StyledBalance = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #363205;
  margin-top: 5px;
  margin-bottom: 10px;
  display: block;
  text-align: center;
  width: 100%;
  font-family: "Roboto", sans-serif;
`;

function Balance() {
  const { balance } = useSpin();
  return (
    <StyledBalance>
      {balance === 0
        ? "Out of money! Please refresh the page to play again."
        : `Balance: ${formatCurrency(balance)}`}
    </StyledBalance>
  );
}

export default Balance;
