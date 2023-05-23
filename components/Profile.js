"use client";
import React from "react";
import { useCurrentUser } from "@/app/context/currentUserContext";
import EditProfie from "./EditProfile";
import DeleteProfile from "./DeleteProfile";
import "../app/styles/profile.css";

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
        <p>{currentUser.friendsWith}</p>
        <div className="update">
          <EditProfie />
          <DeleteProfile />
        </div>
      </div>
    )
  );
}
