import React from "react";

const Entry = ({ entryName, listArray, setListArray }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);
  const [isTicked, setIsTicked] = React.useState(false);

  const submitEdit = (e) => {
    console.log(e);
    if (e.key === "Enter") {

      // Take value
      // const indexValue = listArray.indexOf(e.parentElement.id)
      // set


      // Use key of current entry to edit


      setIsEditing(false);
    }
  };

  if (!isEditing) {
    return (
      <li
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{
          background: isTicked ? "green" : "none",
          display: "flex",
        }}
      >
        <input type="checkbox" onChange={() => setIsTicked(!isTicked)}></input>
        {entryName}

        <button
          onClick={() => setIsEditing(true)}
          style={{ display: isHover ? "block" : "none" }}
        >
          Edit
        </button>
      </li>
    );
  } else {
    return (
      <li
      id="entryName"
      style={{
        background: isTicked ? "green" : "none",
        display: "flex",
      }}>
        <input
          defaultValue={entryName}
          onKeyPress={(e) => submitEdit(e)}
        ></input>
      </li>
    );
  }
};

export default Entry;
