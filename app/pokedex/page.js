import Navbar from "@/components/Navbar";
import prisma from "@/lib/prisma";

async function main() {
  const allPokemon = await prisma.pokemon.findMany();
  return allPokemon;
}

export default async function PokeDex() {
  const data = await main();
  const pokemons = data.map((pokemon) => {
    return (
      <div key={pokemon.id}>
        <div>
          <div>
            <img className="h-80" alt="Pokemon pic" src={pokemon.image} />
          </div>
          <div>{pokemon.name}</div>
          <i>
            {pokemon.type}/{pokemon.secondaryType}
          </i>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      <h1>Pokedex</h1>
      <div>{pokemons}</div>;
    </div>
  );
}
