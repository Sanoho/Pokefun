"use client";
import "../app/styles/myPokemon.css";

export default function PokemonCard({ pokemon }) {
  return (
    <div>
      <div className="max-w-sm p-4 m-4 rounded overflow-hidden shadow-2xl transform transition-all duration-200 hover:scale-95 z-10 cursor-pointer">
        <div>
          <div>
            <img
              className="cardImg"
              alt="Pokemon pic"
              src={pokemon.pokemon.image}
            />
          </div>
          <div className="pokeName">{pokemon.pokemon.name}</div>
        </div>
      </div>
    </div>
  );
}
