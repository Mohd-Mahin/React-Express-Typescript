import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api/home-page").then((res) => console.log(res));
  });
  return <div style={{ background: "green" }}>React with typescript</div>;
}

export default App;
