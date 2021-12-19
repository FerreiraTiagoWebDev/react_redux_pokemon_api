import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonList } from "../../redux/actions/PokemonActions";
import introVideo from "../../intro.mp4";
import "./gameBoy.scss";

const GameBoyPokemon = ({ pokemonList }) => {
  const [playVideo, setPlayVideo] = useState(true);

  //Arrow Position on Y axis
  const [arrowPosition, setArrowPosition] = useState(14);
  //Arrow Position on X axis
  const [arrowPositionX, setArrowPositionX] = useState(10);

  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [counter, setCounter] = useState(2);
  const pokemonList2 = useSelector((state) => state.PokemonList);
  const history = useHistory();
  const dispatch = useDispatch();

  //change arrow on Y Axis when pressing the Up and Down button
  const handleArrowPositionUp = () => {
    if (arrowPosition > 14 && arrowPositionX === 10) {
      setArrowPosition(arrowPosition - 38);
      setSelectedPokemon(selectedPokemon - 1);
    }
  };
  const handleArrowPositionDown = () => {
    if (arrowPosition < 128) {
      setArrowPosition(arrowPosition + 38);
      setSelectedPokemon(selectedPokemon + 1);
    } else if (arrowPosition === 128 && arrowPositionX === 10) {
      setArrowPosition(arrowPosition + 38);
      setSelectedPokemon(4);
    }
  };
  //change arrow on X Axis when pressing the Right and Left button using same function
  const handleArrowPositionXAxis = () => {
    if (arrowPosition === 166 && arrowPositionX === 10) {
      setArrowPositionX(107);
    } else if (arrowPosition === 166 && arrowPositionX === 107) {
      setArrowPositionX(10);
    }
  };

  const FetchData = (page) => {
    dispatch(GetPokemonList(page));
  };
  //Functionality for the A button
  const routeChange = () => {
    if (selectedPokemon >= 0 && selectedPokemon < 4) {
      let path = `/pokemon/${pokemonList.data[selectedPokemon].name}`;
      history.push(path);
    } else if (selectedPokemon > 3 && arrowPositionX === 10) {
      setCounter(counter + 1);
      FetchData(counter);
    } else if (selectedPokemon > 3 && arrowPositionX === 107 && counter > 0) {
      setCounter(counter - 1);
      FetchData(counter);
    }
  };
  console.log(counter);

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
                <p className="display_title">Have you caught this pokemon?</p>
                <div className={"list-wrapper"}>
                 
                  <GoTriangleRight
                    style={{
                      top: `${arrowPosition}px`,
                      left: `${arrowPositionX}px`,
                    }}
                    className="select_arrow"
                  />
                  <div className="select_buttons">
                    <button>Next</button> <button>Prev</button>
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
            <div className="b">B</div>

            <div className="a" onClick={routeChange}>
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
