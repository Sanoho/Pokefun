"use client";
import React from "react";
import { useCurrentUser } from "@/app/context/currentUserContext";
import PokemonCard from "./PokemonCard";

export default function Pokemon() {
  const { currentUser } = useCurrentUser();

  const myPokemon = currentUser.pokemons?.map((pokemon, index) => {
    return <PokemonCard key={index} pokemon={...pokemon}/>
  });

  return <div className="flex flex-wrap place-content-around">{myPokemon}</div>;
}
