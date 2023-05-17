import "./page.css";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const allPokemon = await prisma.pokemon.findMany();
  console.log(allPokemon);
  return allPokemon;
}

export default async function Home() {
  const data = await main();
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
        <Link href="/login">
          <div className="pokeball">
            <div className="pokeball__button"></div>
          </div>
        </Link>
      </div>
    </main>
  );
}
