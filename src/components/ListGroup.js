import { useState } from "react";
import "./ListGroup.css";

export default function ListGroup(props) {
  const {active, items, heading } = props;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <div>
        <h1>{heading}</h1>
        {items.length === 0 ? <p>No items found</p> : null}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
              className={
                selectedIndex === index
                  ? "list-group-item " + String(active)
                  : "list-group-item"
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
