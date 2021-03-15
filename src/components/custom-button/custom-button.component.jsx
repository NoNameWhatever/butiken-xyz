import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, otherClass, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${otherClass ? otherClass : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
