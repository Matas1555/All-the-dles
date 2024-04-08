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
import paperPlane from "../Assets/paper-plane.png";
import dailyDozenPic from "../Assets/daily-dozen-logo.webp";
import dailyDozenBackgroundPic from "../Assets/daily-dozen-background.webp";
import bandlePic from "../Assets/bandle-logo.png";
import connectionsPic from "../Assets/connections.png";

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
              <h1 className="play-text">Guess the artist!</h1>
            </a>
            <a
              className="dle-card factle gamedle"
              href="https://www.gamedle.wtf/?lang=en"
              target="_blank"
            >
              <h1 className="gamedle-text">GAMEDLE</h1>
            </a>
            <a
              className="dle-card travle"
              href="https://imois.in/games/travle/"
              target="_blank"
            >
              <span className="compass-icon">
                <i class="fa-regular fa-compass fa-2xl"></i>
              </span>
              <h1>travle</h1>
            </a>
            <a
              className="dle-card daily-dozen"
              href="https://dailydozentrivia.com/"
              target="_blank"
            >
              <img className="daily-dozen-logo" src={dailyDozenPic}></img>
              <img
                className="daily-dozen-background"
                src={dailyDozenBackgroundPic}
              ></img>
            </a>
            <a
              className="dle-card framed"
              href="https://framed.wtf/"
              target="_blank"
            >
              <h1 className="framed-text">Framed</h1>
            </a>
            <a
              className="dle-card bandle"
              href="https://bandle.app/"
              target="_blank"
            >
              <img className="bandle-logo" src={bandlePic}></img>
              <h1 className="bandle-text">andle</h1>
            </a>
            <a
              className="dle-card connections"
              href="https://www.nytimes.com/games/connections"
              target="_blank"
            >
              <img src={connectionsPic}></img>
            </a>
            <a
              className="dle-card spellcheck"
              href="https://spellcheckgame.com/"
              target="_blank"
            >
              <div className="spellcheck-boxed">
                <h1>Spellcheck</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
