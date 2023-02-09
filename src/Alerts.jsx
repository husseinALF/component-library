import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";

const styles = {
  color: {
    failure:
      "flex flex-row gap-2 p-4 text-sm text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800 rounded-lg",
    success:
      "flex flex-row gap-2 p-5 text-sm text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800 rounded-lg",
  },
  size: {
    small: "text-sm px-4 py-2",
    large: "text-lg px-6 py-3",
  },
  icon: {
    info: <BsInfoCircleFill />,
  },
};

function Alerts(props) {
  const { children, color, onDismiss, icon } = props;

  const colorClass = styles.color[color];

  const iconClass = styles.icon[icon];

  return (
    <div className={`${colorClass}`}>
      {iconClass}
      {children}
      <button onClick={onDismiss} className="hover:text-slate-400 text-base">
        &times;
      </button>
    </div>
  );
}

export default Alerts;
