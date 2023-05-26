import "../styles/resource.css";
import Image from "next/image";
import Antonio from "../../public/resourcepics/Antonio.png";
import Dj from "../../public/resourcepics/Dj.png";
import next from "../../public/resourcepics/next.png";
import prisma from "../../public/resourcepics/prisma.png";

export default async function Resource() {
  return (
    <div>
      <p className="title">Instructors</p>
      <div className="teachers">
        <div>
          <Image className="instr" src={Antonio} alt="avatar for antonio" />
          <p className="name">Antonio Reid</p>
        </div>
        <div>
          <Image className="instr" src={Dj} alt="avatar for dj" />
          <p className="name">DJ Ritchey</p>
        </div>
      </div>
      <div className="site">
        <div>
          <Image className="next" src={next} alt="next logo" />
        </div>
        <div className="google">
          <p className="g">G</p>
          <p className="o">o</p>
          <p className="o1">o</p>
          <p className="g1">g</p>
          <p className="l">l</p>
          <p className="e">e</p>
        </div>
        <div className="youtube">
          <p className="you">You</p>
          <p className="tube">Tube</p>
        </div>
        <div className="prismaContainer">
          <Image className="prisma" src={prisma} alt="prisma logo" />
          <p className="prismaName">Prisma</p>
        </div>
      </div>
      <div className="cohort">
        <h1 className="title2">🍌Boolean Bananas🍌</h1>
      </div>
      <div className="class">
        <div className="half">
          <p className="student">The Prodigy, Andrew Hawileh</p>
          <p className="student">Diana Jordan</p>
          <p className="student">Joshua Hawke</p>
          <p className="student">Reed Broadhead, JB</p>
        </div>
        <div className="half">
          <p className="student">Abdominal Aubs Loudenslager</p>
          <p className="student">Elif Guzey</p>
          <p className="student">Katelynn Morris</p>
          <p className="student">Regan Svobada</p>
        </div>
        <div className="half">
          <p className="student">Bicep Brian Bissette</p>
          <p className="student">Erkut Cakmak, AKA Q.T</p>
          <p className="student">Madeline Dick, Mads</p>
        </div>
        <div className="half">
          <p className="student">Brian Reardon, The Real Brian</p>
          <p className="student">Franco Lepe</p>
          <p className="student">Mandy Ranero</p>
          <p className="student">Scott Henry</p>
        </div>
        <div className="half">
          <p className="student">Daniel Pryakhin, The Russian AI</p>
          <p className="student">Freddy Perez, my twin?</p>
          <p className="student">Nick Gastis, Pretty boy</p>
          <p className="student">Seyfican Yalcindag, Seyfi</p>
        </div>
      </div>
    </div>
  );
}
