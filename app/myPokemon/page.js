"use client";

import { useCurrentUser } from "../context/currentUserContext";

export default async function MyPokemon() {
  const currentUser = useCurrentUser();

  return (
    <div>
      <h1>My pokemon</h1>
      <div>{currentUser.pokemons}</div>
    </div>
  );
}
