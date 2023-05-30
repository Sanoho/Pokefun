"use client";
import "../../app/styles/random.css";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useCurrentUser } from "@/app/context/currentUserContext";

export default function RandomPoke() {
  const [pokemonList, setPokemonList] = React.useState([]);
  const { currentUser } = useCurrentUser();

  React.useEffect(() => {
    fetch("../api/findPokemon")
      .then((res) => res.json())
      .then((pokemon) => setPokemonList(pokemon));
  }, []);

  const cutPokemonList = pokemonList
    .sort(() => 0.5 - Math.random())
    .slice(0, 9);

  const handleCollect = async (pokemon) => {
    if (currentUser.coins >= pokemon.cost) {
      toast(`Congrats!! You collected ${pokemon.name}!!`, {
        hideProgressBar: false,
        autoClose: 4600,
        type: "success",
      });
      const updatedCoins = currentUser.coins - pokemon.cost;
      const fetchdata = await fetch("../api/createPokemonTeam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pokemonId: pokemon.id,
          trainerId: currentUser.id,
          currentUser: currentUser,
          coins: updatedCoins,
        }),
      });
      const resp = await fetchdata.json();
      console.log(resp);
    } else {
      toast("You do not have enough coins!", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    }
  };

  const randomizedList = cutPokemonList.map((pokemon) => {
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
            <button className="collect" onClick={() => handleCollect(pokemon)}>
              Collect
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="random">
      <ToastContainer />
      {randomizedList}
    </div>
  );
}
