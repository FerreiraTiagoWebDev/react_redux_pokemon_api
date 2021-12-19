import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../redux/actions/PokemonActions";
import _ from "lodash";
import Wishlist from "./Wishlist";
import GameBoyPokemon from "./GameBoy/gameBoyPokemon";
import "./GameBoy/gameBoy.scss";

const Pokemon = (props) => {
  //get pokemon from url
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  //state of pokemon's i've caught
  const [caught, setCaught] = useState(null);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <div className={"pokemon-wrapper"}>
          <GameBoyPokemon pokemonName={pokemonName} pokeData={pokeData} />
        </div>
      );
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };

  const addPokemonCaught = (e) => {
    setCaught({ pokemonName });

    dispatch({
      type: "CREATE_CAUGHT_POKEMON",
      payload: {
        name: { pokemonName },
      },
    });
  };
  return (
    <>
      <div>
        <div></div>
      </div>
      <div className={"poke"}>
        <h1>{pokemonName}</h1>
        {ShowData()}
      </div>
    </>
  );
};

export default Pokemon;
