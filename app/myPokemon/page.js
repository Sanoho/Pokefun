import React from "react";
import Pokemon from "@/components/Pokemon";
import "../styles/myPokemon.css";

export default async function MyPokemon() {
  return (
    <div>
      <h1 className="mine">My pokemon</h1>
      <Pokemon />
    </div>
  );
}
