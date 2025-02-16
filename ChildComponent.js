import React from "react";

function ChildComponent({ header, text, imgSrc, onButtonClick }) {
  return (
    <div style={{
      marginBottom: "20px", 
      padding: "15px", 
      border: "2px solid #ddd", 
      borderRadius: "10px",
      width: "60%", 
      margin: "auto", 
      background: "#f9f9f9"
    }}>
      <h2>{header}</h2>
      <p>{text}</p>
      <img src={imgSrc} alt="Alternating" style={{ width: "200px", height: "150px", margin: "10px" }} />
      <br />
      <button onClick={onButtonClick} style={{
        padding: "10px 15px", 
        fontSize: "16px", 
        cursor: "pointer", 
        borderRadius: "5px"
      }}>
        Change Content
      </button>
    </div>
  );
}

export default ChildComponent;
