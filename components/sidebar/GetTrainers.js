"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../app/styles/trainer.css";

export default function GetTrainers() {
  const [trainerList, setTrainerList] = React.useState([]);
  const [selectedTrainer, setSelectedTrainer] = React.useState(null);

  React.useEffect(() => {
    fetch("../api/getAllUsers")
      .then((res) => res.json())
      .then((trainers) => setTrainerList(trainers));
  }, []);

  return (
    <div className="trainerContainer">
      {trainerList.map((trainer) => {
        return (
          <motion.div
            className="trainerCard"
            key={trainer.id}
            layoutId={trainer.id}
            onClick={() => setSelectedTrainer(trainer)}
          >
            <motion.img
              className="trainerImg"
              src={trainer.picture}
              alt="trainer pic"
            />
            <motion.h5 className="trainerName">{trainer.username}</motion.h5>
          </motion.div>
        );
      })}
      <AnimatePresence>
        {selectedTrainer && (
          <>
            <div className="modal" onClick={() => setSelectedTrainer(null)} />
            <motion.div layoutId={selectedTrainer.id} className="animate">
              <motion.img
                className="motionpic"
                src={selectedTrainer.picture}
                alt="trainer pic"
              />
              <motion.div className="motiontop">
                <motion.h1 className="motionhead">Info</motion.h1>
                <motion.h2 className="motionrow">Name :</motion.h2>
                <motion.h5 className="motiondetails">
                  {selectedTrainer.username}
                </motion.h5>
                <motion.h2 className="motionrow">Age :</motion.h2>
                <motion.h2 className="motiondetails">
                  {selectedTrainer.age}
                </motion.h2>
                <motion.h2 className="motionrow">Bio :</motion.h2>
                <motion.h2 className="motiondetails">
                  {selectedTrainer.bio}
                </motion.h2>
                <motion.h2 className="motionrow">Coins :</motion.h2>
                <motion.h2 className="motiondetails">
                  {selectedTrainer.coins}
                </motion.h2>
                <motion.h2 className="motionrow">Badges :</motion.h2>
                <motion.h2 className="motiondetails">
                  {selectedTrainer.badges}
                </motion.h2>
                {/* <motion.button className="motionadd">Add Friend</motion.button> */}
              </motion.div>
              <motion.button
                className="motion-button"
                onClick={() => setSelectedTrainer(null)}
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
