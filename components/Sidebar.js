import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="col-start-1 col-span-1 ml-3">
      <div className="my-5 text-white">Trainers search</div>
      {/* <Link href="/pokepark"> */}
      <div className="my-5 text-white">Poke Park</div>
      {/* </Link> */}
      <Link href="/pokedex">
        <div className="my-5 text-white">PokeDex</div>
      </Link>
      <div className="my-5 text-white">Mini games</div>
      <div className="my-5 text-white">Friends</div>
    </div>
  );
};

export default Sidebar;
