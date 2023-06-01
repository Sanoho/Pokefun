"use client";

import "./page.css";
import Link from "next/link";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default async function Home() {
  React.useEffect(() => {
    toast("Click the pokeball!!", {
      delay: 4000,
      autoClose: 2500,
      position: "bottom-right",
      theme: "dark",
    });
  }, []);

  return (
    <main>
      <div className="center-on-page">
        <img
          className="bulba"
          src="https://projectpokemon.org/images/normal-sprite/bulbasaur.gif"
        />
        <img
          className="char"
          src="https://projectpokemon.org/images/normal-sprite/charmander.gif"
        />
        <img
          className="squirt"
          src="https://projectpokemon.org/images/normal-sprite/squirtle.gif"
        />
        <img
          className="pika"
          src="https://projectpokemon.org/images/normal-sprite/pikachu.gif"
        />
        <Link href="/api/auth/login?returnTo=/main">
          <div className="pokeball">
            <div className="pokeball__button"></div>
          </div>
        </Link>
        <img
          className="mew"
          src="https://media.tenor.com/L5qC_TTSMJMAAAAi/mew-pokemon.gif"
        />
        <audio className="audio" src="./poketheme.mp3" controls autoPlay />
      </div>
      <ToastContainer />
    </main>
  );
}
