import styled from "styled-components";
import { formatCurrency } from "../utils/helpers";
import { useSpin } from "./SlotMachine";

const StyledBalance = styled.div`
  font-size: 1.5em;
  color: #f44336;
  margin-top: 5px;
  margin-bottom: 10px;
  display: block;
  text-align: center;
  width: 100%;
  font-family: "Roboto", sans-serif;
  gap: 10px;
`;

function Balance() {
  const { balance } = useSpin();
  return <StyledBalance>Balance: {formatCurrency(balance)}</StyledBalance>;
}

export default Balance;
