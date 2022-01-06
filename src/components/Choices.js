import React from "react";

const Choices = ({ wordSet, submitAnswer }) => {
  if (wordSet.length === 4) {
    return (
      <>
        {wordSet.map((item) => {
          return <button onClick={(e) => submitAnswer(e.target.id)} key={item.key} id={item.key}>{item.word}</button>;
        })}
      </>
    );
  } else {
      return <p>Loading... </p>
  }
};

export default Choices;
