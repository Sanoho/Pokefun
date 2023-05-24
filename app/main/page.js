// 'use client' makes this module client-side
"use client";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import PokemonTeam from "@/components/PokemonTeam";
import "../styles/main.css";

export default function Main() {
  return (
    <div>
      <div className="dash">
        <Sidebar />
        <PokemonTeam />
        <Profile />
      </div>
      <Footer />
    </div>
  );
}
