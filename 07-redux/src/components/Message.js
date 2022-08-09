import React from "react";

const Message = ({ msg, color }) => {
  const defaultStyles = {
    padding: "1rem",
    textAlign: "center",
    color: "#fff",
    backgroundColor: color,
    margin: "1rem",
  };

  return (
    <div style={defaultStyles}>
      {/* <h3 style={defaultStyles}>{msg}</h3> */}
      <h3 dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;
