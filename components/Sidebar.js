import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="col-start-1 col-span-1 ml-3">
      <div className="my-5 text-white">Trainers</div>
      <Link href="/myPokemon">
        <div className="my-5 text-white">My Pokemon</div>
      </Link>
      <Link href="/pokedex">
        <div className="my-5 text-white">PokeDex</div>
      </Link>
      <Link href="/minigame">
        <div className="my-5 text-white">Mini game</div>
      </Link>
      <Link href="/pokemart">
        <div className="my-5 text-white">PokeMart</div>
      </Link>
      <div className="my-5 text-white">Friends</div>
    </div>
  );
};

export default Sidebar;
