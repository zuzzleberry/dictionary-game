import React from "react";

const Choices = ({ wordSet }) => {
  if (wordSet.length === 4) {
    return (
      <>
        {wordSet.map((item) => {
          return <button key={item.key}>{item.word}</button>;
        })}
      </>
    );
  } else {
      return <p>Loading... </p>
  }
};

export default Choices;
