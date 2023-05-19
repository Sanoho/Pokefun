// "use client";
// import { useUser } from "@auth0/nextjs-auth0/client";
// import { useRouter } from "next/navigation";

import "./page.css";
import Link from "next/link";

export default async function Home() {
  // const { user } = useUser();
  // const router = useRouter();

  // if (user) {
  //   router.push("/main");
  // }
  return (
    <main>
      <div className="center-on-page">
        <img
          className="bulba"
          src="https://projectpokemon.org/images/normal-sprite/bulbasaur.gif"
        />
        <img
          className="char"
          src="https://projectpokemon.org/images/normal-sprite/charmander.gif"
        />
        <img
          className="squirt"
          src="https://projectpokemon.org/images/normal-sprite/squirtle.gif"
        />
        <img
          className="pika"
          src="https://projectpokemon.org/images/normal-sprite/pikachu.gif"
        />
        <Link href="/api/auth/login?returnTo=/main">
          <div className="pokeball">
            <div className="pokeball__button"></div>
          </div>
        </Link>
        <img
          className="mew"
          src="https://media.tenor.com/L5qC_TTSMJMAAAAi/mew-pokemon.gif"
        />
        <audio className="audio" src="./pokeCenter.mp3" controls autoPlay />
      </div>
    </main>
  );
}
