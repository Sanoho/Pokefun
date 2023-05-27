import "../styles/faq.css";

export default function Faq() {
  return (
    <div className="faq">
      <ul className="question">
        What is Pokefun?
        <ul className="answer">
          {" "}
          - Pokefun is an app made from the love and joy for Pokemon!!!
        </ul>
      </ul>
      <ul className="question">
        What is the Pokedex?
        <ul className="answer">
          {" "}
          - Pokedex will show you the Pokemon and their data in our database.
        </ul>
      </ul>
      <ul className="question">
        How many pokemon are there?
        <ul className="answer">
          - There are 1015 Pokemon but we only show gen 1 on our app, 151 of
          them.
        </ul>
      </ul>
      <ul className="question">
        What is the PokeMart?
        <ul className="answer">
          - You can purchase pokemon and add them to your collection in the
          PokeMart.
        </ul>
      </ul>
      <ul className="question">
        Why was this app made?
        <ul className="answer"> - To showcase how awesome pokemon is.</ul>
      </ul>
      <ul className="question">
        What are the future goals of this app?
        <ul className="answer">
          - The plan is to add a trading system and battle functionality!!
        </ul>
      </ul>
    </div>
  );
}
