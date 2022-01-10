import React from "react";

const Choices = ({ wordSet, submitAnswer }) => {
  if (wordSet.length === 4) {
    return (
      <div className="ChoiceList">
        {wordSet.map((item) => {
          return <button onClick={(e) => submitAnswer(e.target.id)} key={item.key} id={item.key}>{item.word}</button>;
        })}
      </div>
    );
  } else {
      return <p>Loading... </p>
  }
};

export default Choices;
