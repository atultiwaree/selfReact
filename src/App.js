// import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import React from "react";
import SearchParams from "./SearchParams";

const App = (x) => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Adopt me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havenese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cocktail",
//     }),
//     React.createElement(Pet, {
//       name: "Ashish",
//       animal: "Snake",
//       breed: "Mix",
//     })
//   );
// };
render(<App />, document.getElementById("root"));
