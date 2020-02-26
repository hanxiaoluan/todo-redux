import React from "react";

const Link = ({ setVisibilityFilter, children, active }) => {
  return (
    <button
      onClick={setVisibilityFilter}
      style={{ marginLeft: "4px" }}
      disabled={active}
    >
      {children}
    </button>
  );
};
export default Link;
