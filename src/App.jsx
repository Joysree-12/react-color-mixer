import { useState } from "react";

function App() {
  const [rcolor, setR] = useState(0);
  const [gcolor, setG] = useState(0);
  const [bcolor, setB] = useState(0);

  const [value, setValue] = useState("");
  const display = () => {
    setValue(`rgb(${rcolor}, ${gcolor}, ${bcolor})`);
  };
  return (
    <>
      <h1>Color Mixer</h1>
      <div
        style={{
          backgroundColor: `rgb(${rcolor}, ${gcolor}, ${bcolor})`,
          height: "200px",
          width: "200px",
        }}
      ></div>
      <br />
      <br />
      <label htmlFor="" style={{ color: "red" }}>
        Red
      </label>
      <input
        type="range"
        value={rcolor}
        onChange={(event) => {
          setR(event.target.value);
        }}
        min={0}
        max={255}
        style={{ accentColor: "red" }}
      ></input>
      <br />
      <br />
      <label htmlFor="" style={{ color: "green" }}>
        Green
      </label>
      <input
        type="range"
        value={gcolor}
        onChange={(event) => {
          setG(event.target.value);
        }}
        min={0}
        max={255}
        style={{ accentColor: "green" }}
      ></input>
      <br />
      <br />
      <label htmlFor="" style={{ color: "blue" }}>
        Blue
      </label>
      <input
        type="range"
        value={bcolor}
        onChange={(event) => {
          setB(event.target.value);
        }}
        min={0}
        max={255}
        style={{ accentColor: "blue" }}
      ></input>
      <br />
      <br />
      <button onClick={display}>Show color range</button>
      <h1>{value}</h1>
      <br />
      <br />
    </>
  );
}

export default App;
