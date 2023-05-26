"use client";
import "../app/styles/random.css";
import React from "react";

export default function RandomPoke() {
  const [pokemonList, setPokemonList] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/api/findPokemon")
      .then((res) => res.json())
      .then((pokemon) => setPokemonList(pokemon));
  }, []);

  const cutPokemonList = pokemonList
    .sort(() => 0.5 - Math.random())
    .slice(0, 9);

  // const handleCollect = async () => {
  //     const fetchData = await fetch('/api/createPokemonTeam', {
  //         method: 'POST',
  //         headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             pokemon: ,
  //             trainer
  //           }),

  //     })
  // }

  const randomList = cutPokemonList.map((pokemon) => {
    return (
      <div key={pokemon.id} className="randomcard">
        <div>
          <div className="cost">{pokemon.cost} ₽</div>
          <div>
            <img className="img" alt="Pokemon pic" src={pokemon.image} />
          </div>
          <div className="pokename">{pokemon.name}</div>
          <div className="type-container">
            <div className="type-holder">
              <p
                className="type"
                style={{
                  background: pokemon.primeTypeColor,
                }}
              >
                {pokemon.type}
              </p>
              <p className="type" style={{ background: pokemon.secTypeColor }}>
                {pokemon.secondaryType}
              </p>
            </div>
            <button className="collect">Collect</button>
          </div>
        </div>
      </div>
    );
  });

  return <div className="random">{randomList}</div>;
}
