import avatar from "../../public/avatar.png";
import Image from "next/image";
import "../styles/about.css";

export default async function About() {
  return (
    <div className="about">
      <Image className="avatar" src={avatar} alt="pic of character" />
      <div className="me">
        <div class="container">
          <h1>Github / LinkedIn / Medium</h1>
          <a href="https://github.com/Sanoho">
            <div class="pokeball3"></div>
          </a>
          <a href="https://www.linkedin.com/in/timothynhoang/">
            <div class="pokeball3"></div>
          </a>
          <a href="https://medium.com/@sanohoang">
            <div class="pokeball3"></div>
          </a>
        </div>
        <p className="text">This will be about me</p>
      </div>
    </div>
  );
}
