import "./page.css";
// import prisma from "../lib/prisma";
import Link from "next/link";

// async function main() {
//   // ... you will write your Prisma Client queries here
//   const allPokemon = await prisma.pokemon.findMany();
//   return allPokemon;
// }

export default async function Home() {
  // const data = await main();
  // console.log(data);
  return (
    <main>
      <div className="center-on-page">
        <audio id="audio" src="./pokeCenter.mp3" controls autoPlay />
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
        <Link href="/api/auth/login?returnTo=/dashboard">
          <div className="pokeball">
            <div className="pokeball__button"></div>
          </div>
        </Link>
      </div>
    </main>
  );
}
