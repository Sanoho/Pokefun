"use client";
import Link from "next/link";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";

export default function Main() {
  const { user, error, isLoading } = useUser();
  const findUser = () => {
    console.log(user);
    if (user) {
      fetch("/api/findOrCreate", {
        method: "POST",
        body: JSON.stringify({
          email: user.email,
          username: user.nickname,
          name: user.name,
          picture: user.picture,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    }
  };
  useEffect(() => {
    findUser();
  }, [user]);
  // const user = require("pages/api/findOrCreate");
  // console.log(user);
  return (
    <div>
      {/* <Navbar /> */}
      <div className="grid grid-cols-5 gap-5">
        <div className="col-start-1 col-span-1 ml-3">
          {/* <Link href="/pokepark"> */}
          <div className="my-5 text-white">Poke Park</div>
          {/* </Link> */}
          <Link href="/pokedex">
            <div className="my-5 text-white">PokeDex</div>
          </Link>
        </div>
        <div className="col-start-2 col-end-5"></div>
        <Profile className="col-start-1 col-span-1" />
      </div>
      <Footer />
    </div>
  );
}
