"use client";
import React from "react";
import { useCurrentUser } from "@/app/context/currentUserContext";
import EditProfie from "./EditProfile";
import DeleteProfile from "./DeleteProfile";
import "../../app/styles/profile.css";

export default function Profile() {
  const { currentUser } = useCurrentUser();

  return (
    currentUser && (
      <div className="div">
        <div className="profile">
          <img
            className="w-48 rounded-full"
            src={currentUser.picture}
            alt={currentUser.name}
          />
          <div className="top">
            <h1 className="head">Info</h1>
            <h2 className="row">Name :</h2>
            <p className="details">{currentUser.username}</p>
            <h2 className="row">Email :</h2>
            <p className="details">{currentUser.email}</p>
            <h2 className="row">Age :</h2>
            <p className="details">{currentUser.age}</p>
            <h2 className="row">Bio :</h2>
            <p className="details">{currentUser.bio}</p>
          </div>
          <p>{currentUser.friendsWith}</p>
        </div>
        <div className="update">
          <EditProfie />
          <DeleteProfile />
        </div>
      </div>
    )
  );
}
