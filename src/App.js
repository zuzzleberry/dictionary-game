import "./App.css";

import React from "react";
import Choices from "./components/Choices";

function App() {
  const [wordSet, setWordSet] = React.useState([])
  const [correctAnswer, setCorrectAnswer] = React.useState()

  React.useEffect(() => {
    const answerInt = randInt()
    setCorrectAnswer(answerInt)
    console.log(answerInt)
    for (let i = 0; i < 4; i++) {
      fetch('https://random-words-api.vercel.app/word')
      .then(response => response.json())
      .then((data) => {
        console.log(data[0].word)
        console.log(data[0].definition)
        setWordSet(wordSet => [...wordSet, {
          key: i,
          word: data[0].word,
          definition: data[0].definition
        }])
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }, []);

  const randInt = () => {
    return Math.floor(Math.random() * 4)
  }

  return (
    <div className="App">
      <h2>Dictionary Game</h2>

      {/* <p>{wordSet [correctAnswer]}</p> */}
      <Choices wordSet={wordSet} item/>
      
    </div>
  );
}

export default App;
