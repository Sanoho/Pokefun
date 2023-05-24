import React from "react";
import "../app/styles/footer.css";
import Image from "next/image";
import logo from "../public/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Image src={logo} alt="logo" className="logo1" />
        <p className="trademark">I do not own the copyrights</p>
        <p className="trademark">
          Pokémon and All Respective Names are Trademark & © of Nintendo
          1996-2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
