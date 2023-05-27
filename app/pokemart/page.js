import "../styles/pokemart.css";
import RandomPoke from "@/components/sidebar/RandomPoke";

export default async function PokeMart() {
  return (
    <div className="pokemart">
      <h1 className="title1">Welcome to the PokeMart</h1>
      <RandomPoke />
    </div>
  );
}
