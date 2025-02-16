import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  
  const [childData, setChildData] = useState({
    child1: { 
      text: "Child 1 - Click to change!", 
      img: "/images/img1.jpeg" 
    },
    child2: { 
      text: "Child 2 - Click to change!", 
      img: "/images/img4.jpeg" 
    }
  });

 
  const updateChildContent = (childId) => {
    setChildData((prevData) => ({
      ...prevData,
      [childId]: {
        text: ` ${childId} Updated!`,
        img: 
          childId === "child1"
            ? (prevData.child1.img === "/images/img1.jpeg" ? "/images/img3.jpeg" : "/images/img1.jpeg") 
            : (prevData.child2.img === "/images/img2.jpeg" ? "/images/img4.jpeg" : "/images/img2.jpeg")
      }
    }));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Parent-Child Image Toggle</h1>
      <ChildComponent 
        header="Game Prediction" 
        text={childData.child1.text} 
        imgSrc={childData.child1.img} 
        onButtonClick={() => updateChildContent("child1")} 
      />
      <ChildComponent 
        header="Best School" 
        text={childData.child2.text} 
        imgSrc={childData.child2.img} 
        onButtonClick={() => updateChildContent("child2")} 
      />
    </div>
  );
}

export default App;
