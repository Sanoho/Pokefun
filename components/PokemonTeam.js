import React from "react";
import { useCurrentUser } from "@/app/context/currentUserContext";
import PokemonCard from "./PokemonCard";
import '../app/styles/myPokemon.css'
import Link from "next/link";

export default function PokemonTeam() {
  const { currentUser } = useCurrentUser();
  const [team, setTeam] = React.useState([]);

  React.useEffect(() => {
    setTeam(currentUser.pokemons)
  }, []);

  const randomTeam = team.sort(() => 0.5 - Math.random()).slice(0, 6);

  const showPokemon = randomTeam.map((pokemon) => {
    return <PokemonCard key={pokemon.pokemonId} pokemon={...pokemon}/>
  })

  if (team.length <= 0) {
    return (
      <div>
        <Link href='/pokemart'>
        <h1 className="get">
          Go get some pokemon!!
        </h1>
        </Link>
      </div>
    );
  }

  return<div className="mainPoke">{showPokemon}</div>
;
}
