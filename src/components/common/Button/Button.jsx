import React from "react";
import "./button.css";

const Button = ({ onClick, children, ...rest }) => (
  <button onClick={onClick} className="btn" {...rest}>
    {children}
  </button>
);

export { Button };
