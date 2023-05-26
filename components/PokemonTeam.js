import React from "react";
import { useCurrentUser } from "@/app/context/currentUserContext";

export default function PokemonTeam() {
  const currentUser = useCurrentUser();
  const [team, setTeam] = React.useState([]);

  if (team.length <= 0) {
    return (
      <div className="col-start-2 col-end-5 text-white">
        <h1 className="font-bold text-2xl tracking-wide uppercase">
          Go get some pokemon!!
        </h1>
      </div>
    );
  }

  return (
    <div className="col-start-2 col-end-5 text-white">
      <h1>{team}</h1>
    </div>
  );
}
