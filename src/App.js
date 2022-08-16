import React from "react";
import ReactDOM from "react-dom";
import ShowHOne from "./test1";
import UsefullHOne from "./test2";
let App = () => {
  return (
    <div>
      <ShowHOne key="fuck" />
      <UsefullHOne key="Me" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
