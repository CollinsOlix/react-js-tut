import { useState } from "react";
import "./List.css";

const styles = {
  list: {
    listStyle: "none",
    backgroundColor: "rgba(255,255,255,0)",
    fontWeight: "700",
    borderBottom: "1px solid black",
    padding: "5px 0 0 0",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
  },
  ul: {
    marginTop: "10px",
    backgroundColor: "rgb(74 121 122)",
    padding: "0 10px",
  },
  span: {
    margin: "0 10px",
    opacity: "0",
    flex: "1",
    fontSize: "20px",
  },
  p: {
    textAlign: "center",
    flex: "10",
  },
};

// function that makes the delete button visible
function handlePeeHover({ index }) {
  let spans = document.querySelectorAll("span");
  spans[index].style.opacity = "100";
}
// function that makes the delete button invisible
function handlePeeLeave({ index }) {
  let spans = document.querySelectorAll("span");
  spans[index].style.opacity = "0";
}


//Main function to be exported, contons all the properties of the list
export default function List(props) {
  const [[tasks], setTask] = useState(Object.values(props));

  //function that deletes an item on click of the delete button
  const deleteTask = ({ index }) => {
    let newTask = tasks;
    newTask.splice(index, 1);
    return newTask;
  };


  return (
    <div>
    {/* used an unordered list for the wrapping of the function */}
      <ul style={styles.ul}>

      {/* Here we have a simple ternary to render the tasks if any or a paragraph if none  */}
        {tasks.length < 1 ? <p>No tasks at the moment</p> : null}

      {/* Here we map the items in the task list to list items  */}
        {tasks.map((task, index) => (
          <li
            style={styles.list}
            key={index}
            onMouseOver={() => handlePeeHover({ index })}
            onMouseLeave={() => handlePeeLeave({ index })}
          >
            <span
              style={styles.span}
              onClick={() => setTask([deleteTask({ index })])}
            >
              x
            </span>
            <p style={styles.p}>{task}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
