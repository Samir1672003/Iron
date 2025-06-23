import React from "react";
import "../Button/Button.css";

const Button = ({ content }) => {
  return (
    <a className="button relative cursor-pointer">
      <span className="button-game-bg-left"></span>

      <span className="button-game-bg-mid">
        <span className="button-game-bg-mid-text">{content}</span>
      </span>

      <span className="button-game-bg-right"></span>
    </a>
  );
};

export default Button;
