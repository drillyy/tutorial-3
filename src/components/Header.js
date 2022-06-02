import troll from "../images/Troll Face.png";

export default function Header() {
  return (
    <div className="header">
      <img className="header--logo" src={troll} alt="troll-face" />
      <div className="header--title">Meme Generator</div>
      <div className="header--subtitle">React Course - Tutorial 3</div>
    </div>
  );
}
