import "./page.css";

export default function Home() {
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
        <div className="pokeball">
          <div className="pokeball__button"></div>
        </div>
      </div>
    </main>
  );
}
