"use client";

import "../app/styles/memory.css";
import { useState, useEffect } from "react";
import { useCurrentUser } from "@/app/context/currentUserContext";
import pic1 from "../public/memory/1.png";
import pic2 from "../public/memory/2.png";
import pic3 from "../public/memory/3.png";
import pic4 from "../public/memory/4.png";
import pic5 from "../public/memory/5.png";
import pic6 from "../public/memory/6.png";
import pic7 from "../public/memory/7.png";
import pic8 from "../public/memory/8.png";
import Image from "next/image";

const board = [
  <Image className="card-img" src={pic1} />,
  <Image className="card-img" src={pic2} />,
  <Image className="card-img" src={pic3} />,
  <Image className="card-img" src={pic4} />,
  <Image className="card-img" src={pic5} />,
  <Image className="card-img" src={pic6} />,
  <Image className="card-img" src={pic7} />,
  <Image className="card-img" src={pic8} />,
];

export default function MemoryGame() {
  const [boardData, setBoardData] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const { currentUser, setCurrentUser } = useCurrentUser();

  useEffect(() => {
    if (!showPlayButton) {
      initialize();
    }
  }, []);

  useEffect(() => {
    if (matchedCards.length == 16) {
      setGameWon(true);
    } else if (moves === 30) {
      setGameOver(true);
    }
  }, [moves]);

  //   const winCoins = async () => {
  //     const updatedBalance = currentUser.wallet.balance + 100;
  //     setCurrentUser((prevUser) => ({
  //       ...prevUser,
  //       wallet: {
  //         ...prevUser.wallet,
  //         balance: updatedBalance,
  //       },
  //     }));
  //     await fetch("/api/updateCoins", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: currentUser.email,
  //         updatedBalance,
  //       }),
  //     });
  //   };

  //   const loseCoins = async () => {
  //     if (currentUser.wallet.balance >= 50) {
  //       const updatedBalance = currentUser.wallet.balance - 50;
  //       setCurrentUser((prevUser) => ({
  //         ...prevUser,
  //         wallet: {
  //           ...prevUser.wallet,
  //           balance: updatedBalance,
  //         },
  //       }));
  //       await fetch("/api/updateCoins", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: currentUser.email,
  //           updatedBalance,
  //         }),
  //       });
  //     }
  //   };

  const initialize = () => {
    shuffle();
    setGameOver(false);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };

  const shuffle = () => {
    const shuffledCards = [...board, ...board]
      .sort(() => Math.random() - 0.5)
      .map((v) => v);
    setBoardData(shuffledCards);
  };

  const updateActiveCards = (i) => {
    if (!flippedCards.includes(i)) {
      if (flippedCards.length == 1) {
        const firstIdx = flippedCards[0];
        const secondIdx = i;
        if (boardData[firstIdx] == boardData[secondIdx]) {
          setMatchedCards((prev) => [...prev, firstIdx, secondIdx]);
        }

        setFlippedCards([...flippedCards, i]);
      } else if (flippedCards.length == 2) {
        setFlippedCards([i]);
      } else {
        setFlippedCards([...flippedCards, i]);
      }

      setMoves((v) => v + 1);
    }
  };

  const handlePlayButtonClick = () => {
    initialize();
    setShowPlayButton(false);
  };

  return (
    <div className="container">
      <div className="left-container">
        <div className="menu">
          <p>{`Moves - ${moves}`} / 28</p>
        </div>
        <div className="menu">
          {gameOver === true ? <h3>GAME OVER!</h3> : null}
          {gameWon === true ? <h3>CONGRATULATIONS!</h3> : null}
        </div>
        {showPlayButton ? (
          <button onClick={handlePlayButtonClick} className="play-btn">
            Play
          </button>
        ) : (
          <button onClick={initialize} className="reset-btn">
            Reset
          </button>
        )}
      </div>
      <div className="board">
        {boardData.map((data, i) => {
          const flipped = flippedCards.includes(i) ? true : false;
          const matched = matchedCards.includes(i) ? true : false;
          return (
            <div
              onClick={() => {
                updateActiveCards(i);
              }}
              key={i}
              className={`card ${flipped || matched ? "active" : ""} ${
                matched ? "matched" : ""
              } ${gameOver ? "gameover" : ""}`}
            >
              <div className="card-front">{data}</div>
              <div className="card-back"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
