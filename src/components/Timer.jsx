import { useState, useEffect } from "react";
const Timer = ({ end }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!end) {
      const interval = setInterval(() => setTime(time + 1), 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [time, end]);
  return (
    <h1>
      Seconds elapsed: <span>{time}</span>
      {end ? <p>winner winner chicken dinner</p> : ""}
    </h1>
  );
};

export default Timer;
