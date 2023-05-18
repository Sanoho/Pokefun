import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Main() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5 gap-5">
        <div className="col-start-1 col-span-1 ">
          {/* <Link href="/pokepark"> */}
          <div className="my-5">Poke Park</div>
          {/* </Link> */}
          <Link href="/pokedex">
            <div className="my-5">PokeDex</div>
          </Link>
        </div>
        <div className="col-start-2 col-end-4"></div>
        <div className="col-start-5 col-span-1 text-right">Profile</div>
      </div>
      <Footer />
    </div>
  );
}
