import React from "react";

const Button = ({className = "", children, type = "button", ...props}) => {
  return (
    <button type={type} {...props} className={`btnLink ${className}`}>
      {children}
    </button>
  );
};

export default Button;
