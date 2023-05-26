import "../styles/pokedex.css";

export default async function PokeDex() {
  const allPokemon = await fetch("http://localhost:3000/api/findPokemon").then(
    (res) => res.json()
  );
  const pokemons = allPokemon.map((pokemon) => {
    return (
      <div
        key={pokemon.id}
        style={{
          background: pokemon.primeTypeColor,
        }}
        className="max-w-sm p-4 m-4 rounded overflow-hidden shadow-2xl bg-slate-300 transform transition-all duration-200 hover:scale-95 z-10 cursor-pointer"
      >
        <div>
          <div>
            <img className="h-80" alt="Pokemon pic" src={pokemon.image} />
          </div>
          <div className="pokename">{pokemon.name}</div>
          <div className="type-holder">
            <p
              className="type"
              style={{
                background: pokemon.primeTypeColor,
              }}
            >
              {pokemon.type}
            </p>
            <p className="type" style={{ background: pokemon.secTypeColor }}>
              {pokemon.secondaryType}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="card-container">
      {/* <h1 className="text-xl font-bold text-center text-white mb-2">Pokedex</h1> */}
      {pokemons}
    </div>
  );
}
