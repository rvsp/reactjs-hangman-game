import React, { useEffect } from "react";

import { check } from "../_helpers/helpers";

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  play,
}) => {
  let message = "";
  let finalRevealWord = "";
  let playable = true;
  if (check(correctLetters, wrongLetters, selectedWord) === "win") {
    message = "You won the Game";
    playable = false;
  } else if (check(correctLetters, wrongLetters, selectedWord) === "lose") {
    message = "You lost the Game";
    finalRevealWord = `The word was ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div
      className="popup-container"
      style={message !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{message}</h2>
        <h3>{finalRevealWord}</h3>
        <button onClick={play}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
