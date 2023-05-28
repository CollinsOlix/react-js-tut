import "./Todo.css";
import { Form } from "./Components";
export default function Todo() {
  return (
    <div className="myContainer">
      <div className="todo">
        <h1>Todo</h1>
        <div className="line"></div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
