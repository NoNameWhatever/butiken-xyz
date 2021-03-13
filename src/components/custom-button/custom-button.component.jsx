import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, otherClass, ...otherProps }) => {
  return (
    <button
      className={`${otherClass ? otherClass : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
