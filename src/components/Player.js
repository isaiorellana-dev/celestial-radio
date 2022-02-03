import React from "react";
import "@styles/components/Player.scss";

const Player = () => {
  const [timer, setTimer] = React.useState(1);

  React.useEffect(() => {
    setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }, []);
  return (
    <div className="player">
      <p>Play</p>
      <p>Pause</p>
      <p>{timer}</p>
    </div>
  );
};

export default Player;
