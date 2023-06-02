"use client";
import React from "react";
import { useCurrentUser } from "@/app/context/currentUserContext";
import { motion, AnimatePresence } from "framer-motion";
import "../app/styles/myPokemon.css";

export default function Pokemon() {
  const { currentUser } = useCurrentUser();
  const [selectedPokemon, setSelectedPokemon] = React.useState(null);

  return (
    <div className="pokemonContainer">
      {currentUser.pokemons?.map((pokemon) => {
        return (
          <motion.div
            className="pokeCard"
            key={pokemon.pokemon.id}
            layoutId={pokemon.pokemon.id}
            onClick={() => setSelectedPokemon(pokemon.pokemon)}
          >
            <motion.img
              className="pokemonImg"
              src={pokemon.pokemon.image}
              alt="pokemon pic"
            />
            <motion.h5 className="pokemonName">
              {pokemon.pokemon.name}
            </motion.h5>
          </motion.div>
        );
      })}
      <AnimatePresence>
        {selectedPokemon && (
          <>
            <div className="modal" onClick={() => setSelectedPokemon(null)} />
            <motion.div layoutId={selectedPokemon.id} className="animate">
              <motion.img
                className="motionpic"
                src={selectedPokemon.spriteFront}
                alt="Pokemon pic"
              />
              <motion.div className="motiontop">
                <motion.h1 className="motionhead">Info</motion.h1>
                <motion.h2 className="motionrow">Name :</motion.h2>
                <motion.h5 className="motiondetails">
                  {selectedPokemon.name}
                </motion.h5>
                <motion.h2 className="motionrow">Type :</motion.h2>
                <motion.h2 className="motiondetails">
                  {selectedPokemon.type} {selectedPokemon.secondaryType}
                </motion.h2>
                <motion.h2 className="motionrow">Height :</motion.h2>
                <motion.h2 className="motiondetails">
                  {selectedPokemon.height}
                </motion.h2>
                <motion.h2 className="motionrow">Weight :</motion.h2>
                <motion.h2 className="motiondetails">
                  {selectedPokemon.weight}
                </motion.h2>
                <motion.h2 className="motionrow">Details :</motion.h2>
                <motion.h2 className="motiondetails">
                  {selectedPokemon.details}
                </motion.h2>
                <motion.h2 className="motionrow">Stats :</motion.h2>
                <motion.h2 className="motiondetails">
                  Hp: {selectedPokemon.hp} Atk: {selectedPokemon.attack} {""}
                  <br />
                  Spd: {selectedPokemon.speed} Def: {selectedPokemon.defense}
                </motion.h2>
              </motion.div>
              <motion.button
                className="motion-button"
                onClick={() => setSelectedPokemon(null)}
              >
                X
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
