"use client";
import React from "react";
import { useCurrentUser } from "@/app/context/currentUserContext";
import PokemonCard from "./PokemonCard";

export default function Pokemon() {
  const { currentUser } = useCurrentUser();

  const myPokemon = currentUser.pokemons?.map((pokemon) => {
    return <PokemonCard key={pokemon.pokemonId} pokemon={...pokemon}/>
  });

  return <div className="flex flex-wrap place-content-around">{myPokemon}</div>;
}
