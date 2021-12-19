import React from "react";
import { Link } from "react-router-dom";
import "../components/GameBoy/gameBoy.scss";
import introVideo from "../intro.mp4";

const PokemonVideo = (props) => {
  // const handleStart = () => {
  //   <Link
  // }
  return (
    <div>
      <div className="intro_text">
        <h1>Welcome to the Pokedex!</h1>
        <p>Use the controls to navigate!</p>
        <p>A - Select and B - Back</p>
        <p>Press Start to begin!</p>
      </div>
      <div className="gameboy" id="GameBoy">
        <div className="screen-area">
          <div className="power">
            <div className="indicator">
              <div className="led"></div>
              <span className="arc" style={{ zIndex: 2 }}></span>
              <span className="arc" style={{ zIndex: 2 }}></span>
              <span className="arc" style={{ zIndex: 2 }}></span>
            </div>
            POWER
          </div>

          <div className="display" id="mainCanvas">
            <div>
              <div className="upperVideoBar">
                <p>Press Start</p>
              </div>
              <video
                className="introvideo"
                width="210px"
                height="190px"
                autoPlay
                loop
                muted
                src={introVideo}
                type="video/mp4"
              />
            </div>
          </div>

          <div className="label">
            <div className="title">GAME BOY</div>
            <div className="subtitle">
              <span className="c">C</span>
              <span className="o1">O</span>
              <span className="l">L</span>
              <span className="o2">O</span>
              <span className="r">R</span>
            </div>
          </div>
        </div>

        <div className="nintendo">Nintendo</div>

        <div className="controls">
          <div className="dpad">
            <div className="up">
              <i className="fa fa-caret-up"></i>
            </div>
            <div className="right">
              <i className="fa fa-caret-right"></i>
            </div>
            <div className="down">
              <i className="fa fa-caret-down"></i>
            </div>
            <div className="left">
              <i className="fa fa-caret-left"></i>
            </div>
            <div className="middle"></div>
          </div>
          <div className="a-b">
            <div className="b">B</div>

            <div className="a">A</div>
          </div>
        </div>

        <div className="start-select">
          <div className="select">SELECT</div>
          <Link to="/pokemon">
            <div className="start">START</div>
          </Link>
        </div>

        <div className="speaker">
          <div className="dot placeholder"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot placeholder"></div>

          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>

          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>

          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>

          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>

          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>

          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>

          <div className="dot placeholder"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot closed"></div>
          <div className="dot open"></div>
          <div className="dot placeholder"></div>
        </div>
      </div>
    </div>
  );
};
export default PokemonVideo;
