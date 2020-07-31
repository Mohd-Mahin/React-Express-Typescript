import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api/shop").then((res) => console.log(res));
  });
  return <div style={{ background: "green" }}>React with typescript</div>;
}

export default App;
