import "../css/homePage.css";
import wordlePic from "../Assets/wordle.png";
import cloudPic from "../Assets/clouds.png";
import planetPic from "../Assets/planet.png";
import controllerPic from "../Assets/controller-icon.webp";
import shroomPic from "../Assets/shroom.png";
import chronophotoPic from "../Assets/chronophoto.png";
import timeguessrPic from "../Assets/timeguesrr-logo.svg";
import tradlePic from "../Assets/tradle-logo.png";
import tradleShip from "../Assets/tradle-ship.png";
import arrow from "../Assets/drawn-arrow.png";

function HomePage() {
  return (
    <>
      <div className="home-page-container">
        <div className="home-page-header">
          <h1 className="header-text">ALL THE DLES!</h1>
        </div>
        <div className="main-container">
          <div className="dles-container">
            <a
              className="dle-card wordle"
              href="https://www.nytimes.com/games/wordle/index.html"
              target="_blank"
            >
              <img src={wordlePic}></img>
            </a>
            <a
              className="dle-card globle"
              href="https://globle-game.com/"
              target="_blank"
            >
              <img className="cloudpic" src={cloudPic}></img>
              <img className="planetpic" src={planetPic}></img>
              <h1 className="globle-text">GLOBLE</h1>
            </a>
            <a
              className="dle-card factle"
              href="https://factle.app/"
              target="_blank"
            >
              <h1>Factle</h1>
            </a>
            <a
              className="dle-card guess-the-game"
              href="https://guessthe.game/"
              target="_blank"
            >
              <img className="gtgpic" src={controllerPic}></img>
              <h1>GuessThe.Game™</h1>
              <img className="shroompic" src={shroomPic}></img>
            </a>
            <a
              className="dle-card chronophoto"
              href="https://www.chronophoto.app/daily.html"
              target="_blank"
            >
              <h1>CHRONOPHOTO</h1>
              <img className="chronopic" src={chronophotoPic}></img>
            </a>
            <a
              className="dle-card timeguessr"
              href="https://www.timeguessr.com/"
              target="_blank"
            >
              <img className="timeguessrpic" src={timeguessrPic}></img>
            </a>
            <a
              className="dle-card tradle"
              href="https://games.oec.world/en/tradle/"
              target="_blank"
            >
              <img className="tradle-ship" src={tradleShip}></img>
              <img className="tradle-logo" src={tradlePic}></img>
            </a>
            <a
              className="dle-card spotle"
              href="https://spotle.io/"
              target="_blank"
            >
              <div className="white-circle">
                <h1 className="spotle-text">spotle.</h1>
              </div>
              <img className="arrowpic" src={arrow}></img>
              <h1 className="play-text">Play!</h1>
            </a>
            <a
              className="dle-card factle gamedle"
              href="https://www.gamedle.wtf/?lang=en"
              target="_blank"
            >
              <h1 className="gamedle-text">GAMEDLE</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
