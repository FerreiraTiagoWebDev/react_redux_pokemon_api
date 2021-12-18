import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./gameBoy.scss";
import { GoTriangleRight } from "react-icons/go";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonList } from "../../redux/actions/PokemonActions";

const GameBoy = ({ pokemonList }) => {
  const [arrowPosition, setArrowPosition] = useState(14);
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [counter, setCounter] = useState(2)
  const pokemonList2 = useSelector((state) => state.PokemonList);
  const history = useHistory();
  const dispatch = useDispatch();
 

  const handleArrowPositionUp = () => {
    if (arrowPosition > 14) {
      setArrowPosition(arrowPosition - 38);
      setSelectedPokemon(selectedPokemon - 1);
    }
  };
  const handleArrowPositionDown = () => {
    if (arrowPosition < 128) {
      setArrowPosition(arrowPosition + 38);
      setSelectedPokemon(selectedPokemon + 1);
    } else if (arrowPosition === 128) {
      setArrowPosition(arrowPosition + 38);
      setSelectedPokemon(4);
    }
  };

  const FetchData = (page) => {
    dispatch(GetPokemonList(page));
  };

  const routeChange = () => {
    if (selectedPokemon >= 0 && selectedPokemon < 4) {
      let path = `/pokemon/${pokemonList.data[selectedPokemon].name}`;
      history.push(path);
    } else if (selectedPokemon > 3) {
      setCounter(counter + 1)
      console.log(counter)
        FetchData(counter)
        
      
    }
  };

  
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
              <p className="display_title">Choose your pokemon</p>
              <div className={"list-wrapper"}>
                {pokemonList.data.map((el) => {
                  return (
                    <Link
                      to={`/pokemon/${el.name}`}
                      key={el.name}
                      className={"pokemon-item"}
                    >
                      <div>
                        <p>{el.name}</p>
                      </div>
                    </Link>
                  );
                })}
                <GoTriangleRight
                  style={{ top: `${arrowPosition}px` }}
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
            <div className="right">
              <i className="fa fa-caret-right"></i>
            </div>
            <div className="down" onClick={() => handleArrowPositionDown()}>
              <i className="fa fa-caret-down"></i>
            </div>
            <div className="left">
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
          <div className="start">START</div>
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

export default GameBoy;
