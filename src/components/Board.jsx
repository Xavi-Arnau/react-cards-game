import Card from "./Card";
import { useEffect, useState } from "react";

const Board = ({ cards, stop }) => {
  const [visibleCards, setvisibleCards] = useState([]);
  const [pair, setPair] = useState([]);
  const [playable, setPlayable] = useState(true);

  useEffect(() => {
    if (pair.length === 2) {
      if (cards[pair[0]] !== cards[pair[1]]) {
        console.log("2 cartes");
        setPlayable(false);
        setTimeout(() => {
          setvisibleCards(visibleCards.filter((elem) => !pair.includes(elem)));
          setPlayable(true);
        }, 1000);
      } else {
        if (visibleCards.length === cards.length) {
          stop();
        }
      }
      setPair([]);
    }
  }, [pair, visibleCards, cards, stop]);

  function uncoverCard(index) {
    if (playable) {
      setvisibleCards([...visibleCards, index]);

      setPair([...pair, index]);
    }
  }
  return (
    <div className="container">
      {cards.map((num, index) => (
        <Card
          key={Math.floor(Math.random() * 10000)}
          text={num}
          onClick={uncoverCard}
          index={index}
          show={visibleCards.includes(index)}
        />
      ))}
    </div>
  );
};

export default Board;
