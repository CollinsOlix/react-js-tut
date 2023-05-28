import { useState } from "react";
import { List } from "./Components";
import "./Form.css";

const styles = {
  input: {
    backgroundColor: "#aeb",
  },
};
export default function Form() {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);
  let temp = task;

  return (
    <div>
      <form>
        <input
          style={styles.input}
          type="text"
          placeholder="Add Task"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <button
          onClick={(event) => {
            event.preventDefault();
            temp.push(value);
            setTask(temp);
            setValue("");
          }}
        >
          Submit
        </button>
      </form>
      <List tasks={task} setTask={setTask} />
    </div>
  );
}
