import React from "react";

function Card(props) {
  const { imgSrc, imgAlt, children, href } = props;

  return (
    <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-8">
      <a href={href}>
        <img src={imgSrc} alt={imgAlt} />
      </a>{" "}
      {children}
    </div>
  );
}

export default Card;
