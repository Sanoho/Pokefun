"use client";

export default function PokemonCard({ pokemon }) {
  return (
    <div>
      <div className="max-w-sm p-4 m-4 rounded overflow-hidden shadow-2xl transform transition-all duration-200 hover:scale-95 z-10 cursor-pointer">
        <div>
          <div className="text-white">Id: {pokemon.pokemonId}</div>
          <div>
            <img
              className="h-80 text-white"
              alt="Pokemon pic"
              src={pokemon.pokeImg}
            />
          </div>
          <div className="text-white">{pokemon.pokemonName}</div>
        </div>
      </div>
    </div>
  );
}
