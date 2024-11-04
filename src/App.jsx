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
        <button onClick={() => setBgColor("blue")}>Blue</button>
        <button onClick={() => setBgColor("#7eeb17")}>LightGreen</button>
        <button onClick={() => setBgColor("green")}>Green</button>
        <button onClick={() => setBgColor("yellow")}>Yellow</button>
        <button onClick={() => setBgColor("rgb(140, 12, 30)")}>Pink</button>
        <button onClick={() => setBgColor("black")}>Black</button>
        <button onClick={() => setBgColor("red")}>Red</button>
        <button onClick={() => setBgColor("brown")}>Brown</button>
        <button onClick={() => setBgColor("Pink")}>Pink</button>
        <button onClick={() => setBgColor("Gray")}>Gray</button>
      </div>
    </>
  );
}

export default App;
