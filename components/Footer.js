import React from "react";
import "../app/styles/footer.css";
import Image from "next/image";
import logo from "../public/footer/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Link href="/about">
          <p className="about">About me</p>
        </Link>
      </div>
      <div className="logoContainer">
        <Image src={logo} alt="logo" className="logo1" />
        <p className="trademark">I do not own the copyrights</p>
        <p className="trademark">
          Pokémon and All Respective Names are Trademark & © of Nintendo
          1996-2023
        </p>
      </div>
      <div>
        <Link href="/resource">
          <p className="about">Resources</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
