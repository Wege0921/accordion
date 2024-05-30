import { useState } from "react";

import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSelection(selectedId) {
    setSelected(selectedId === selected ? null : selectedId);
  }

  const [enableMulti, setEnableMulti] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  function handleMultiSelection(selectedId) {
    let multiCopy = [...multiSelection];

    const findIndex = multiCopy.indexOf(selectedId);

    if (findIndex === -1) {
      multiCopy.push(selectedId);
    } else {
      multiCopy.splice(findIndex, 1);
    }

    setMultiSelection(multiCopy);
  }

  return (
    <dvi className="wrapper">
      <button onClick={() => setEnableMulti(!enableMulti)}>
        Enable Multiple Selection
      </button>
      {data && data.length > 0 ? (
        <div className="container">
          {data.map((ditems) => (
            <div className="title">
              <h3>{ditems.question}</h3>

              <button
                onClick={
                  enableMulti
                    ? () => handleMultiSelection(ditems.id)
                    : () => handleSelection(ditems.id)
                }
              >
                Show Answer
              </button>
              {enableMulti
                ? multiSelection.indexOf(ditems.id) !== -1 && (
                    <div className="content">{ditems.answer}</div>
                  )
                : selected === ditems.id && (
                    <div className="content">{ditems.answer}</div>
                  )}
            </div>
          ))}
        </div>
      ) : (
        <div>No data avilable</div>
      )}
    </dvi>
  );
}
