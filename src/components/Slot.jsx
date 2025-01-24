import styled from "styled-components";

const StyledSlot = styled.img`
  width: 100%;
  border: ${(props) => (props.$middleItem ? "1px solid red" : "none")};
  background-color: ${(props) => (props.$middleItem ? "red" : "white")};
  border-radius: ${(props) => (props.$middleItem ? "10px" : "0px")};
  -webkit-user-drag: none;
  align-content: center;
  justify-content: center;
  height: 80px;
`;

function Slot({ index, slotIndex, items }) {
  return (
    <StyledSlot
      key={index}
      src={items[slotIndex]}
      alt={`item-${slotIndex}`}
      $middleItem={index === 1} // Đánh dấu hàng giữa
    />
  );
}

export default Slot;
