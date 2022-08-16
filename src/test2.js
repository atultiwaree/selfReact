import { useState } from "react";

let h1Style = {
  color: "red",
  fontSize: "1rem",
};

let UsefullHOne = () => {
  let [name, setName] = useState("");
  let setter = (e) => {
    e.preventDefault();
    document.getElementById("yo").innerHTML = ` ${name} `;
  };
  return (
    <div>
      <h1 style={h1Style} id="yo">
        Hello! there this is me atul tir
      </h1>
      <p>Fucking Guys Set your name</p>
      <form onSubmit={setter}>
        <input
          type="text"
          value={name}
          placeholder="Enter the text..."
          onChange={(x) => setName(x.target.value)}
        />
        <button type="submit">Set the name</button>
      </form>
    </div>
  );
};

export default UsefullHOne;
