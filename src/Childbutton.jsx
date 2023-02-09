import React from "react";

const styles = {
  color: {
    red: "bg-red-300 hover:bg-red-600",
    black: "bg-black hover:bg-white",
  },
  size: {
    large: "text-lg px-6 py-3",
  },
  button: {
    default:
      "text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg",
  },
};

export default function Childbutton(props) {
  const { children } = props;
  const colorClass = styles.color[children];
  const sizeClass = styles.size[children];
  const defaultClass = styles.button[children];

  return (
    <button className={`${colorClass} ${sizeClass} ${defaultClass}`}>
      {children}
    </button>
  );
}
