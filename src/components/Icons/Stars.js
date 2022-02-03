import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export const Star = ({ size, color }) => {
  return <BsStarFill color={color || "yellow"} size={size || 25} />;
};
export const HalfStar = ({ size, color }) => {
  return <BsStarHalf color={color || "yellow"} size={size || 25} />;
};
export const EmptyStar = ({ size, color }) => {
  return <BsStar color={color || "yellow"} size={size || 25} />;
};
