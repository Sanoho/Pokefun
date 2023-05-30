"use client";

import "../../app/styles/memory.css";
import { useState, useEffect } from "react";
import { useCurrentUser } from "@/app/context/currentUserContext";
import pic1 from "../../public/memory/1.png";
import pic2 from "../../public/memory/2.png";
import pic3 from "../../public/memory/3.png";
import pic4 from "../../public/memory/4.png";
import pic5 from "../../public/memory/5.png";
import pic6 from "../../public/memory/6.png";
import pic7 from "../../public/memory/7.png";
import pic8 from "../../public/memory/8.png";
import bg from "../../public/memory/bg.png";
import Image from "next/image";

const board = [
  <Image className="card-img" src={pic1} alt="card" />,
  <Image className="card-img" src={pic2} alt="card" />,
  <Image className="card-img" src={pic3} alt="card" />,
  <Image className="card-img" src={pic4} alt="card" />,
  <Image className="card-img" src={pic5} alt="card" />,
  <Image className="card-img" src={pic6} alt="card" />,
  <Image className="card-img" src={pic7} alt="card" />,
  <Image className="card-img" src={pic8} alt="card" />,
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
      winCoins();
    } else if (moves === 30) {
      setGameOver(true);
    }
  }, [moves]);

  const winCoins = async () => {
    const updatedBalance = currentUser.coins + 5;
    setCurrentUser({ ...currentUser, coins: updatedBalance });
    await fetch("/api/updateCoins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: currentUser.email,
        updatedBalance,
      }),
    });
  };

  const loseCoins = async () => {
    if (currentUser.coins >= 2) {
      const updatedBalance = currentUser.coins - 2;
      setCurrentUser({ ...currentUser, coins: updatedBalance });
      await fetch("/api/updateCoins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: currentUser.email,
          updatedBalance,
        }),
      });
    } else {
      alert("You do not have any coins!");
    }
  };

  const initialize = () => {
    loseCoins();
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
          {gameOver === true ? <h3>GAME OVER!, Try again?</h3> : null}
          {gameWon === true ? <h3>CONGRATULATIONS!, Try again?</h3> : null}
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
        <div className="direction">
          Play the game to win some coins. It cost 2 to play but you can gain 5
          in return. Make sure to pay attention and memorize where the cards
          are. If you don't complete the game in 28 moves, you lose. Good luck
          and have fun!!
        </div>
        <div className="ps">P.S looks like you have your own audience.</div>
        <Image src={bg} alt="pokemon pics" className="bg" />
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
