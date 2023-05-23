// 'use client' makes this module client-side
"use client";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";

export default function Main() {
  const { user, error, isLoading } = useUser();
  const findUser = () => {
    // check if user is in the DB, if not, fetch serverless function and POST/create new instance
    if (user) {
      console.log(user);
      fetch("/api/findOrCreate", {
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
      })
        .then((resp) => resp.json())
        .then((data) => data);
    }
  };
  useEffect(() => {
    findUser();
  }, [user]);

  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        <Sidebar />
        <div className="col-start-2 col-end-5 text-white"> Pokemon Team</div>
        <Profile className="col-start-1 col-span-1" />
      </div>
      <Footer />
    </div>
  );
}
