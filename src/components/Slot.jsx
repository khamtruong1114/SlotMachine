import styled from "styled-components";
import seven from "../assets/images/7.jpg";
import cherry from "../assets/images/cherry.jpg";
import star from "../assets/images/star.jpg";

const StyledSlot = styled.img`
  width: 100%;
  border-radius: 10px;
  -webkit-user-drag: none;
  align-content: center;
  justify-content: center;
  height: 80px;
`;

const items = [seven, cherry, star];

export const Slot = ({ value }) => {
  console.log("index", index);
  console.log("value", value);
  // const slotIndex = value[index];
  // console.log("slotIndex", slotIndex);
  return <StyledSlot src={items[value]} alt={`item-${value}`} />;
};
