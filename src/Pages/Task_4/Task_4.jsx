import React, { useState, useEffect } from "react";
import "./Task_4.css";

const Task_4 = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [hitIndex, setHitIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        setGameOver(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    const hitInterval = setInterval(() => {
      const newHitIndex = Math.floor(Math.random() * 9);
      setHitIndex(newHitIndex);
      setTimeout(() => {
        setHitIndex(null);
      }, 1000);
    }, 2000);

    return () => clearInterval(hitInterval);
  }, []);

  const handleBoxClick = (index) => {
    if (!gameOver) {
      if (index === hitIndex) {
        setScore((prevScore) => prevScore + 5);
      } else {
        setScore((prevScore) => prevScore - 2.5);
      }
    }
  };

  const handleRestart = () => {
    setGameOver(false);
    setTimeLeft(60);
    setScore(0);
  };

  const renderBoxes = () => {
    return boxes.map((box, index) => (
      <div
        key={index}
        className={`box ${index === hitIndex ? "hit" : ""}`}
        onClick={() => handleBoxClick(index)}
      >
        {index === hitIndex ? "Hit" : ""}
      </div>
    ));
  };

  return (
    <div className="game-container">
      <h1>Game</h1>
      <div className="score">Score: {score}</div>
      <div className="timer">Time Left: {timeLeft} seconds</div>
      {gameOver && (
        <div>
          <div className="game-over">Game Over! Your score is : {score}</div>
          <p>Please click Reset button to play again</p>
          <button className="restart-btn" onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}
      <div className="game-board">{renderBoxes()}</div>
    </div>
  );
};

export default Task_4;
