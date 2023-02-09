import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const styles = {
  color: {
    default: "bg-blue-200 text-blue-800 ",
    dark: "bg-gray-700 text-gray-300",
    warning: "bg-yellow-200 text-yellow-900",
  },
  size: {
    small: "px-2 py-0.5 p-1 text-xs",
    large: "text-lg px-6 py-3",
  },
  icon: {
    check: <AiFillCheckCircle />,
  },
};

function Badges(props) {
  const { children, color, size, icon } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];
  const iconClass = styles.icon[icon];

  return (
    <div className={` rounded  ${colorClass} ${sizeClass}`}>
      {iconClass}
      {children}
    </div>
  );
}

export default Badges;
