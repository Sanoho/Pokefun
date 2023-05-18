import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";

export default function Main() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="grid grid-cols-5 gap-5">
        <div className="col-start-1 col-span-1 ">
          {/* <Link href="/pokepark"> */}
          <div className="my-5">Poke Park</div>
          {/* </Link> */}
          <Link href="/pokedex">
            <div className="my-5">PokeDex</div>
          </Link>
        </div>
        <div className="col-start-2 col-end-5"></div>
        <Profile className="col-start-1 col-span-1" />
      </div>
      <Footer />
    </div>
  );
}
