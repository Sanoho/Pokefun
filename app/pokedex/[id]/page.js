import "../../styles/pokedex.css";

export default function Page({ params }) {
  return (
    <div className="pokedex">
      <div className="left">
        <div className="logo"></div>
        <div className="bg_curve1_left"></div>
        <div className="bg_curve2_left"></div>
        <div className="curve1_left">
          <div className="buttonGlass">
            <div className="reflect"> </div>
          </div>
          <div className="miniButtonGlass1"></div>
          <div className="miniButtonGlass2"></div>
          <div className="miniButtonGlass3"></div>
        </div>
        <div className="curve2_left">
          <div className="junction">
            <div className="junction1"></div>
            <div className="junction2"></div>
          </div>
        </div>
        <div className="screen">
          <div className="topPicture">
            <div className="buttontopPicture1"></div>
            <div className="buttontopPicture2"></div>
          </div>
          <div className="picture">
            <img src={params.image} alt={params.name} height="170" />
          </div>
          <div className="buttonbottomPicture"></div>
          <div className="speakers">
            <div class="sp"></div>
            <div class="sp"></div>
            <div class="sp"></div>
            <div class="sp"></div>
          </div>
        </div>
        <div className="bigbluebutton"></div>
        <div className="barbutton1"></div>
        <div className="barbutton2"></div>
        <div className="cross">
          <div className="leftcross">
            <div className="leftT"></div>
          </div>
          <div className="topcross">
            <div className="upT"></div>
          </div>
          <div className="rightcross">
            <div className="rightT"></div>
          </div>
          <div className="mclassNamecross">
            <div className="mclassNameCircle"></div>
          </div>
          <div className="botcross">
            <div className="downT"></div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="stats">
          <strong>Name:</strong> {params.name}
          <br />
          <strong>Type:</strong> {params.type}
          <br />
          <strong>Height:</strong> {params.height}
          <br />
          <strong>Weight:</strong> {params.weight}
          <br />
          <br />
          <strong>Pokédex Entry</strong>
          <br />
          {params.details}
        </div>
        <div className="blueButtons1">
          <div class="blueButton"></div>
          <div class="blueButton"></div>
          <div class="blueButton"></div>
          <div class="blueButton"></div>
          <div class="blueButton"></div>
        </div>
        <div className="blueButtons2">
          <div class="blueButton"></div>
          <div class="blueButton"></div>
          <div class="blueButton"></div>
          <div class="blueButton"></div>
          <div class="blueButton"></div>
        </div>
        <div className="miniButtonGlass4"></div>
        <div className="miniButtonGlass5"></div>
        <div className="barbutton3"></div>
        <div className="barbutton4"></div>
        <div className="yellowBox1"></div>
        <div className="yellowBox2"></div>
        <div className="bg_curve1_right"></div>
        <div className="bg_curve2_right"></div>
        <div className="curve1_right"></div>
        <div className="curve2_right"></div>
      </div>
    </div>
  );
}
