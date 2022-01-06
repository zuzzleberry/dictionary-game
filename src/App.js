import logo from "./logo.svg";
import "./App.css";

import List from "./components/List";
import React from "react";

function App() {
  const [wordSet, setWordSet] = React.useState([])

  React.useEffect(() => {
    const randInt = Math.floor(Math.random(10))
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

  return (
    <div className="App">
      <h2>Dictionary Game</h2>
     
     <button onClick={() => console.log(wordSet)}>log set</button>
     <p></p>
      {wordSet.map((item) => {
        return <button>{item.key}</button>
      })}
    </div>
  );
}

export default App;
