"use client";
import "../../styles/pokeId.css";

export default function PokemonPage({ searchParams }) {
  console.log(searchParams);
  return (
    <div id="pokedex">
      <div id="left">
        <div id="logo"></div>
        <div id="bg_curve1_left"></div>
        <div id="bg_curve2_left"></div>
        <div id="curve1_left">
          <div id="buttonGlass">
            <div id="reflect"> </div>
          </div>
          <div id="miniButtonGlass1"></div>
          <div id="miniButtonGlass2"></div>
          <div id="miniButtonGlass3"></div>
        </div>
        <div id="curve2_left">
          <div id="junction">
            <div id="junction1"></div>
            <div id="junction2"></div>
          </div>
        </div>
        <div id="screen">
          <div id="topPicture">
            <div id="buttontopPicture1"></div>
            <div id="buttontopPicture2"></div>
          </div>
          <div id="picture">
            <img
              className="gif"
              src={searchParams.spriteFront}
              alt={searchParams.name}
            />
          </div>
          <div id="buttonbottomPicture"></div>
          <div id="speakers">
            <div className="sp"></div>
            <div className="sp"></div>
            <div className="sp"></div>
            <div className="sp"></div>
          </div>
        </div>
        <div id="bigbluebutton"></div>
        <div id="barbutton1"></div>
        <div id="barbutton2"></div>
        <div id="cross">
          <div id="leftcross">
            <div id="leftT"></div>
          </div>
          <div id="topcross">
            <div id="upT"></div>
          </div>
          <div id="rightcross">
            <div id="rightT"></div>
          </div>
          <div id="midcross">
            <div id="midCircle"></div>
          </div>
          <div id="botcross">
            <div id="downT"></div>
          </div>
        </div>
      </div>
      <div id="right">
        <div id="stats">
          <strong>Pokédex Entry</strong>
          <br />
          <strong>Id:</strong> {searchParams.id}
          <br />
          <strong>Name:</strong> {searchParams.name}
          <br />
          <strong>Type:</strong> {searchParams.type}{" "}
          {searchParams.secondaryType}
          <br />
          <strong>Height:</strong> {searchParams.height}
          <br />
          <strong>Weight:</strong> {searchParams.weight}
          <br />
        </div>
        <div id="blueButtons1">
          <div className="blueButton"></div>
          <div className="blueButton"></div>
          <div className="blueButton"></div>
          <div className="blueButton"></div>
          <div className="blueButton"></div>
        </div>
        <div id="blueButtons2">
          <div className="blueButton"></div>
          <div className="blueButton"></div>
          <div className="blueButton"></div>
          <div className="blueButton"></div>
          <div className="blueButton"></div>
        </div>
        <div id="miniButtonGlass4"></div>
        <div id="miniButtonGlass5"></div>
        <div id="barbutton3"></div>
        <div id="barbutton4"></div>
        <div id="yellowBox1"></div>
        <div id="yellowBox2"></div>
        <div id="bg_curve1_right"></div>
        <div id="bg_curve2_right"></div>
        <div id="curve1_right"></div>
        <div id="curve2_right"></div>
      </div>
    </div>
  );
}
