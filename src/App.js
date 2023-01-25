import "./App.css";
import { useState } from "react";
import Overview from "./components/Overview";

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

      <Overview input={input} />
    </>
  );
}

export default App;
