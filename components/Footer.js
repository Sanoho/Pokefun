import React from "react";
import "../app/styles/footer.css";
import Image from "next/image";
import logo from "../public/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Image src={logo} alt="logo" className="logo1" />
      </div>
    </div>
  );
};

export default Footer;
