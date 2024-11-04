import React, { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <>
      <h1 style={{ color: "darkgreen", backgroundColor: "white" }}>
        Select a Color
      </h1>
      <div
        className="sh"
        style={{
          backgroundColor: bgColor,
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setBgColor("Blue")}>Blue</button>
        <button onClick={() => setBgColor("#7eeb17")}>LightGreen</button>
        <button onClick={() => setBgColor("Red")}>Red</button>
        <button onClick={() => setBgColor("gray")}>gray</button>
        <button onClick={() => setBgColor("Pink")}>Pink</button>
        <button onClick={() => setBgColor("black")}>Black</button>
        <button onClick={() => setBgColor("Green")}>Green</button>
        <button onClick={() => setBgColor("brown")}>Brown</button>
        <button onClick={() => setBgColor("Orange")}>Orange</button>
        <button onClick={() => setBgColor("White")}>White</button>
      </div>
    </>
  );
}

export default App;
