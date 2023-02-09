import React from "react";

const styles = {
  color: {
    red: "bg-red-300 hover:bg-red-600",
    blue: "bg-green-700  hover:bg-green-800",
  },
  size: {
    small: "text-sm px-4 py-2",
    large: "text-lg px-6 py-3",
  },
  disabled:
    "cursor-not-allowed opacity-50 text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 p-0.5 text-center font-medium focus:z-10 rounded-lg",
};

function Button(props) {
  const { size, color, disabled = null } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];
  const disabledClass = disabled ? styles.disabled : "";

  return (
    <button
      className={`rounded-xl ${colorClass} ${sizeClass} ${disabledClass}`}
    >
      button
    </button>
  );
}

export default Button;
