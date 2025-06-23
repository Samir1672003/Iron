// components/FlipNumber.jsx
import React from "react";
import FlipDigit from "./FlipDigit";

export default function FlipNumber({ number }) {
  const digits = number.toString().split("");

  return (
    <div style={{ display: "flex" }}>
      {digits.map((digit, index) => (
        <FlipDigit key={index} digit={digit} />
      ))}
    </div>
  );
}
