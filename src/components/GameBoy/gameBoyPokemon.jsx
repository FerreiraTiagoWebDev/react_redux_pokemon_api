import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonList } from "../../redux/actions/PokemonActions";
import introVideo from "../../intro.mp4";
import "./gameBoyPokemon.scss";

const GameBoyPokemon = ({ pokemonName, pokeData }) => {
  const [playVideo, setPlayVideo] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [showMoves, setShowMoves] = useState(false);

  //Arrow Position on Y axis
  const [arrowPosition, setArrowPosition] = useState(110);
  //Arrow Position on X axis
  const [arrowPositionX, setArrowPositionX] = useState(10);

  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [counter, setCounter] = useState(2);

  const history = useHistory();
  const dispatch = useDispatch();

  //change arrow on Y Axis when pressing the Up and Down button
  const handleArrowPositionUp = () => {
    if (arrowPosition === 140) {
      setArrowPosition(110);
      setSelectedPokemon(selectedPokemon - 1);
    }
  };
  const handleArrowPositionDown = () => {
    if (arrowPosition === 110) {
      setArrowPosition(140);
      setSelectedPokemon(selectedPokemon + 1);
    } else if (arrowPosition === 128 && arrowPositionX === 10) {
      setArrowPosition(arrowPosition + 38);
      setSelectedPokemon(4);
    }
  };
  //change arrow on X Axis when pressing the Right and Left button using same function
  const handleArrowPositionXAxis = () => {
    if (arrowPositionX === 10) {
      setArrowPositionX(107);
    } else if (arrowPositionX === 107) {
      setArrowPositionX(10);
    }
  };

  //Functionality for the A button
  const handleButtonA = () => {
    if (arrowPositionX === 10 && arrowPosition === 110) {
      setShowStats(true);
    } else if (arrowPositionX === 107 && arrowPosition === 110) {
      setShowMoves(true);
    }
  };

  //Functionality for the B button
  const handleButtonB = () => {
    if (showStats || showMoves) {
      setShowStats(false);
      setShowMoves(false);
    }
  };
  console.log(pokeData);
  return (
    <div>
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
            <div className="display_pokemons">
              <p className="display_title second_title">
                Have you caught {pokemonName}?
              </p>
              <div className={"list-wrapper"}>
                <img
                  src={pokeData.sprites.front_default}
                  alt="poke_image"
                  className="pokemonImage"
                />

                <GoTriangleRight
                  style={{
                    top: `${arrowPosition}px`,
                    left: `${arrowPositionX}px`,
                  }}
                  className="select_arrow"
                />

                {/* rendering selected options based on state with short circuits */}
                <div className="select_buttons">
                  {showStats ? (
                    <div className="retro_box">
                      <button>
                        {pokeData.stats[0].stat.name}:
                        {pokeData.stats[0].base_stat}
                      </button>
                      <button>
                        {pokeData.stats[1].stat.name}:
                        {pokeData.stats[1].base_stat}
                      </button>
                      <button id="btn_mTop">
                        {pokeData.stats[2].stat.name}:
                        {pokeData.stats[2].base_stat}
                      </button>
                      <button id="btn_mTop2">
                        {pokeData.stats[5].stat.name}:
                        {pokeData.stats[5].base_stat}
                      </button>
                    </div>
                  ) : showMoves ? (
                    <div className="retro_box">
                      <button>{pokeData.moves[7].move.name}</button>
                      <button>{pokeData.moves[68].move.name}</button>
                      <button id="btn_mTop">
                        {pokeData.moves[52].move.name}
                      </button>
                      <button id="btn_mTop2">
                        {pokeData.moves[14].move.name}
                      </button>
                    </div>
                  ) : (
                    <div className="retro_box">
                      <button>Stats</button>
                      <button>Moves</button>
                      <button id="btn_mTop">Catch</button>
                      <button id="btn_mTop2">Wish</button>
                    </div>
                  )}
                </div>
                {/* 10px 50px 80px 120px 160px*/}
              </div>
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
            <div className="up" onClick={() => handleArrowPositionUp()}>
              <i className="fa fa-caret-up"></i>
            </div>
            <div className="right" onClick={() => handleArrowPositionXAxis()}>
              <i className="fa fa-caret-right"></i>
            </div>
            <div className="down" onClick={() => handleArrowPositionDown()}>
              <i className="fa fa-caret-down"></i>
            </div>
            <div className="left" onClick={() => handleArrowPositionXAxis()}>
              <i className="fa fa-caret-left"></i>
            </div>
            <div className="middle"></div>
          </div>
          <div className="a-b">
            <div className="b" onClick={handleButtonB}>
              B
            </div>

            <div className="a" onClick={handleButtonA}>
              A
            </div>
          </div>
        </div>

        <div className="start-select">
          <div className="select">SELECT</div>
          <div className="start" onClick={() => setPlayVideo(false)}>
            START
          </div>
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

export default GameBoyPokemon;
