import React from "react";
import Link from "next/link";
import "../../app/styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="linkContainer">
        <Link href="/trainers">
          <div className="sideLinks">Trainers</div>
        </Link>
        <Link href="/myPokemon">
          <div className="sideLinks">My Pokemon</div>
        </Link>
        <Link href="/pokedex">
          <div className="sideLinks">PokeDex</div>
        </Link>
        <Link href="/minigame">
          <div className="sideLinks">Mini game</div>
        </Link>
        <Link href="/pokemart">
          <div className="sideLinks">PokeMart</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
