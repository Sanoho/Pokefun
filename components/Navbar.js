"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user)
    return <div className="text-6xl text-yellow-200 text-center">PokeFun</div>;

  return (
    user && (
      <div className="grid grid-cols-3 gap-3 my-5">
        <div className="text-center">FAQ</div>
        <Link href="/main">
          <div className="text-6xl text-yellow-200 text-center">PokeFun</div>
        </Link>
        <div className="text-center">
          <a href="/api/auth/logout">
            <button>Logout</button>
          </a>
        </div>
      </div>
    )
  );
};

export default Navbar;
