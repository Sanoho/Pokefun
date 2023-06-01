import avatar from "../../public/about/avatar.png";
import gen1 from "../../public/about/gen1.png";
import Image from "next/image";
import Link from "next/link";
import "../styles/about.css";

export default async function About() {
  return (
    <div className="aboutme">
      <div className="imgContainer">
        <Image
          className="avatar"
          src={avatar}
          alt="pic of character"
          priority={false}
        />
      </div>
      <div className="content">
        <h1 className="header1">About me</h1>
        <p className="text">
          Hello, my name is Tim Hoang and I am a software engineer. I hope you
          enjoyed this app as this was created as my capstone project. As a fan
          of Pokemon, I wanted to showcase my skills as a developer and create
          something fun for fellow Pokemon lovers. You can find me on LinkedIn
          if you want to connect. My Github shows my other projects I made as a
          Flatiron student and my Medium account will bring you to the blogs I
          have written. Thanks for giving me your time and checking out my app.
        </p>
        <div className="container">
          <div className="links">
            <h2 className="linkheaders">Github | LinkedIn | Medium</h2>
            <Link href="https://github.com/Sanoho" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <div className="pokeball3"></div>
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/timothynhoang/"
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <div className="pokeball3"></div>
              </a>
            </Link>
            <Link href="https://medium.com/@sanohoang" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <div className="pokeball3"></div>
              </a>
            </Link>
          </div>
          <div className="gen1container">
            <Image src={gen1} alt="all 151 pokemon" className="gen1" />
          </div>
        </div>
      </div>
    </div>
  );
}
