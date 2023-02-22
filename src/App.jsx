import { useState, useEffect } from "react";
import { fetchData } from "./utils/api";
react;
function App() {
  useEffect(() => {
    apitesting();
  }, []);

  const apitesting = () => {
    fetchData("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return <div className="App"></div>;
}

export default App;
