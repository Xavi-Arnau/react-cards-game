const Card = ({ text, onClick, index, show }) => {
  const CARD_EMOJI = "🎲";
  return (
    <div className="card">
      <p onClick={() => onClick(index)}>{show ? text : CARD_EMOJI}</p>
    </div>
  );
};

export default Card;
