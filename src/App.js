import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [input, setInput] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setInput((current) => [...current, text]);
    console.log(input);
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={text}></input>
      <button onClick={handleClick}>Submit</button>

      <h1>{text}</h1>
      <h1>{input}</h1>
    </>
  );
}

export default App;
