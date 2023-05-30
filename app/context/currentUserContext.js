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
      email: userData.email,
      username: userData.username,
      name: userData.name,
      picture: userData.picture,
      pokemons: userData.pokemons,
      age: userData.age,
      bio: userData.bio,
      coins: userData.coins,
      badges: userData.badges,
      friendsWith: userData.friendsWith,
    });
    return userData;
  };
  useEffect(() => {
    if (user && !currentUser.email) {
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
