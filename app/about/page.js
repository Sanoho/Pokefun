import avatar from "../../public/avatar.png";
import Image from "next/image";
import "../styles/about.css";

export default async function About() {
  return (
    <div className="aboutme">
      <Image
        className="avatar"
        src={avatar}
        alt="pic of character"
        priority={false}
      />
      <p className="text">
        Hello, my name is Tim Hoang and I am a software engineer. I hope you
        enjoyed this app as this was created as my capstone project. As a fan of
        Pokemon, I wanted to showcase my skills as a developer and create
        something fun for fellow Pokemon lovers. You can find me on LinkedIn if
        you want to connect. My Github shows my other projects I made as a
        Flatiron student and my Medium account will bring you to the blogs I
        have written. Thanks for giving me your time and checking out my app.
      </p>
      <div className="container">
        <h1>Github | LinkedIn | Medium</h1>
        <a href="https://github.com/Sanoho">
          <div className="pokeball3"></div>
        </a>
        <a href="https://www.linkedin.com/in/timothynhoang/">
          <div className="pokeball3"></div>
        </a>
        <a href="https://medium.com/@sanohoang">
          <div className="pokeball3"></div>
        </a>
      </div>
    </div>
  );
}
