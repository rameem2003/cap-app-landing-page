import React from "react";

const UL = ({ className, children, ref }) => {
  return (
    <ul ref={ref} className={`${className}`}>
      {children}
    </ul>
  );
};

export default UL;
