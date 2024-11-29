import { useState } from "react";
import styles from './ListGroup.module.css'

interface ListGroupProps {
  items: string[];
  heading: string;
}



function ListGroup({items, heading}: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1> {heading} </h1>
      {items.length === 0 && <p> No items to render </p>}
      <ul className={[styles.ListGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
