import Board from "./components/Board";
import Timer from "./components/Timer";
import { useEffect, useState } from "react";

const App = () => {
  const [cards, setCards] = useState([]);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    function arrayWithNoRepeatingNumbers(n) {
      let result = [];

      for (let i = 0; i < 2 * n; i++) {
        result.push(Math.floor(Math.random() * 100));
      }

      result = [...new Set(result)];

      if (result.length >= n) {
        //Si tenim suficients números diferents...
        return result.slice(0, n);
      } else {
        //Si no, torna-hi...
        return arrayWithNoRepeatingNumbers(n);
      }
    }

    function arrayWithDuplicatedNumbers(n) {
      //20 ---> 10 números difeernts ---> me'ls dupliques ---> els desordenes
      const singleNumbers = arrayWithNoRepeatingNumbers(n / 2);
      const duplicatedNumbers = singleNumbers.concat(singleNumbers);
      //Desordenem l'array
      return duplicatedNumbers.sort(() => Math.random() - 0.5);
    }

    const arrayNumbers = arrayWithDuplicatedNumbers(10);
    setCards(arrayNumbers);
  }, []);

  function gameEnding() {
    console.log("end game");
    setEnd(true);
  }
  return (
    <>
      <Timer end={end} />
      <Board cards={cards} stop={gameEnding} />
    </>
  );
};

export default App;
