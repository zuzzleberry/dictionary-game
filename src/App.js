import "./App.css";

import React, { useCallback } from "react";
import Choices from "./components/Choices";

function App() {
  const [wordSet, setWordSet] = React.useState([])
  const [isSetLoaded, setIsSetLoaded] = React.useState(false)
  const [correctAnswer, setCorrectAnswer] = React.useState()


  const [score, setScore] = React.useState(0)
  const [life, setLife] = React.useState(100)

  React.useEffect(() => {
    callApi()
  }, []);

  const callApi = useCallback(() => {
    setWordSet([])
    const answerInt = randInt()
    setCorrectAnswer(answerInt)
    for (let i = 0; i < 4; i++) {
      fetch('https://random-words-api.vercel.app/word')
      .then(response => response.json())
      .then((data) => {
        setWordSet(wordSet => [...wordSet, {
          key: i,
          word: data[0].word,
          definition: data[0].definition
        }])
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }, [wordSet])

  const randInt = () => {
    return Math.floor(Math.random() * 4)
  }
  const submitAnswer = (answerKey) => {
    if (answerKey == correctAnswer) {
      console.log("Correct answer");
      setScore(score + 1);
      callApi();
    } else {
      console.log("Wrong!");
      setLife(life - 10)
      callApi();
    }
  }

  if (life > 0) {
    return (
      <div className="App">
        <h2>Dictionary Game</h2>
  
        {wordSet.length === 4 ? <p>{wordSet[correctAnswer].definition}</p> : null}
        <Choices wordSet={wordSet} submitAnswer={submitAnswer}/>
        <p>Your score: {score}</p>
        <p>Your life: {life}</p>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h2>Dictionary Game</h2>
  
        <h3>GAME OVER</h3>
        <p>Your score: {score}</p>
        <p>Your life: {life}</p>
      </div>
    )
  }

  
}

export default App;
