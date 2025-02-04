import styled from "styled-components";

const StyledSlot = styled.img`
  width: 100%;
  border-radius: 10px;
  -webkit-user-drag: none;
  align-content: center;
  justify-content: center;
  height: 80px;
`;

function Slot({ index, slotIndex, items }) {
  return (
    <StyledSlot key={index} src={items[slotIndex]} alt={`item-${slotIndex}`} />
  );
}

export default Slot;
