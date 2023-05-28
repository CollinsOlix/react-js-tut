import { useState } from "react";
import "./Button.css";

export default function Button() {
  let [number, setNumber] = useState(0);
  let [firstname, setFirstName] = useState("");
  let [lastname, setLastName] = useState("");
  return (
    <>
      <form>
        <label htmlFor="firstname">FirstName</label>
        <input
          id="firstname"
          type="text"
          onChange={(event) => {
            setFirstName(event.target.value);
            console.log(event.target.value);
          }}
          value={firstname}
        ></input>
        <label htmlFor="lastname">LastName</label>
        <input
          id="lastname"
          type="text"
          onChange={(event) => {
            setLastName(event.target.value);
            console.log(event.target.value);
          }}
          value={lastname}
        ></input>
        <button>Submit</button>
      </form>
      <div
        className="button"
        onClick={() => {
          setNumber(++number);
          console.log([document.querySelector("#firstname").value,document.querySelector("#lastname").value]);
        }}
      >
        Count:
        {number}
      </div>
    </>
  );
}
