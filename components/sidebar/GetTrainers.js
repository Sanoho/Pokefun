"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../app/styles/trainer.css";

export default function GetTrainers() {
  const [trainerList, setTrainerList] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState(null);

  React.useEffect(() => {
    fetch("../api/getAllUsers")
      .then((res) => res.json())
      .then((trainers) => setTrainerList(trainers));
  }, []);

  const trainer = trainerList.map((trainer) => (
    <motion.div
      className="trainerCard"
      key={trainer.id}
      layoutId={trainer.id}
      onClick={() => setSelectedId(trainer.id)}
    >
      <motion.img
        className="trainerImg"
        src={trainer.picture}
        alt="trainer pic"
      />
      <motion.h5 className="trainerName">{trainer.username}</motion.h5>
    </motion.div>
  ));

  <AnimatePresence>
    {selectedId && (
      <motion.div layoutId={selectedId}>
        <motion.img src={trainer.picture} alt="trainer pic" />
        <motion.h5>{trainer.username}</motion.h5>
        <motion.h2>{trainer.age}</motion.h2>
        <motion.h2>{trainer.bio}</motion.h2>
        <motion.button onClick={() => setSelectedId(null)} />
      </motion.div>
    )}
  </AnimatePresence>;

  return <motion.div className="trainerContainer">{trainer}</motion.div>;
}
