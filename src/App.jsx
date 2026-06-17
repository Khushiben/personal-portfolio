import React from "react";
import Home from "./Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
  const moveGlow = (e) => {
    document.body.style.setProperty("--x", `${e.clientX}px`);
    document.body.style.setProperty("--y", `${e.clientY}px`);
  };

  window.addEventListener("mousemove", moveGlow);

  return () => {
    window.removeEventListener("mousemove", moveGlow);
  };
}, []);
  return <Home />;
}

export default App;