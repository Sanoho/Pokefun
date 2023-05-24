"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const { user, error, isLoading } = useUser();
  const [currentUser, setCurrentUser] = useState({
    email: "",
    username: "",
    name: "",
    picture: "",
    age: null,
    bio: "",
    coins: 0,
    badges: 0,
    pokemons: [],
    friendsWith: [],
  });

  const getUser = async () => {
    const resp = await fetch("/api/findOrCreate", {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        username: user.nickname || user.username,
        name: user.name,
        picture: user.picture,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const userData = await resp.json();
    setCurrentUser({
      email: userData.user.email,
      username: userData.user.username,
      name: userData.user.name,
      picture: userData.user.picture,
      pokemons: [userData.user.pokemons],
      age: userData.user.age,
      bio: userData.user.bio,
      coins: userData.user.coins,
      badges: userData.user.badges,
      friendsWith: [userData.user.friendsWith],
    });
    return userData;
  };
  useEffect(() => {
    if (user) {
      const resp = getUser(user);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useCurrentUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
