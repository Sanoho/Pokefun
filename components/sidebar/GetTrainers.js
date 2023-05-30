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

  const trainers = trainerList.map((trainer) => {
    return (
      <div>
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
        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId} className="animate">
              <motion.img
                className="motionpic"
                src={trainer.picture}
                alt="trainer pic"
              />
              <motion.div className="motiontop">
                <motion.h1 className="motionhead">Info</motion.h1>
                <motion.h2 className="motionrow">Name :</motion.h2>
                <motion.h5 className="motiondetails">
                  {trainer.username}
                </motion.h5>
                <motion.h2 className="motionrow">Age :</motion.h2>
                <motion.h2 className="motiondetails">{trainer.age}</motion.h2>
                <motion.h2 className="motionrow">Bio :</motion.h2>
                <motion.h2 className="motiondetails">{trainer.bio}</motion.h2>
                <motion.h2 className="motionrow">Coins :</motion.h2>
                <motion.h2 className="motiondetails">{trainer.coins}</motion.h2>
                <motion.h2 className="motionrow">Badges :</motion.h2>
                <motion.h2 className="motiondetails">
                  {trainer.badges}
                </motion.h2>
                {/* <motion.button className="motionadd">Add Friend</motion.button> */}
              </motion.div>
              <motion.button
                className="motion-button"
                onClick={() => setSelectedId(null)}
              >
                X
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  });
  console.log(selectedId);

  return <motion.div className="trainerContainer">{trainers}</motion.div>;
}
