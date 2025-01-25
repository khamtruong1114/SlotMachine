import { useSpin } from "../context/useSpin";
import { formatCurrency } from "../utils/helpers";

function Balance() {
  const { balance } = useSpin();
  return <div>Balance: {formatCurrency(balance)}</div>;
}

export default Balance;
