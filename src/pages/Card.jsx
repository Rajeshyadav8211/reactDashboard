import React from "react";

const Card = ({ title, value }) => {
  return (
    <div
      style={{
        padding: "20px",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        flex: "1",
      }}
    >
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Card;
