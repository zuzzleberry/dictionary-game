import React from "react";
import Entry from "./Entry";

import "./List.css";
import "../App.css";

const List = () => {
  const [number, setNumber] = React.useState(0);

  const [entryText, setEntryText] = React.useState("");
  const [listArray, setListArray] = React.useState([]);

  const submitEntry = (e) => {
    if (e.key === "Enter") {
      console.log("submit");
      setListArray([...listArray, entryText]);
      setEntryText("");
    }
  };

  React.useEffect(() => {
    console.log(listArray);
  }, [listArray]);

  return (
    <div className="List Center">
      <p>Add item to list</p>

      <input
        value={entryText}
        onChange={(e) => setEntryText(e.target.value)}
        onKeyDown={(e) => submitEntry(e)}
      ></input>
      <ul>
        {listArray.map((item) => {
          return (
            <Entry
              entryName={item}
              key={item}
              listArray={listArray}
              setListArray={setListArray}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
