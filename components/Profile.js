"use client";
import React from "react";
import { useCurrentUser } from "@/app/context/currentUserContext";

export default function Profile() {
  const currentUser = useCurrentUser();

  return (
    currentUser && (
      <div className="bg-cyan-400">
        <img
          className="w-48 rounded-full"
          src={currentUser.picture}
          alt={currentUser.name}
        />
        <h2>{currentUser.username}</h2>
        <p>{currentUser.email}</p>
        <p>{currentUser.coins}</p>
        <p>{currentUser.friendsWith}</p>
      </div>
    )
  );
}
