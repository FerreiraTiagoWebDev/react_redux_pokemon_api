import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../redux/actions/PokemonActions";
import _ from "lodash";
// import Wishlist from "../components/Wishlist";
import GameBoyPokemon from "../components/GameBoy/gameBoyPokemon";
import "../components/GameBoy/gameBoy.scss";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  //get pokemon from url
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  //state of pokemon's i've caught
  // const [caught, setCaught] = useState(null);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);

  const ShowData = () => {
    try {
      if (!_.isEmpty(pokemonState.data[pokemonName])) {
        const pokeData = pokemonState.data[pokemonName];

        return (
          <div className={"pokemon-wrapper"}>
            <GameBoyPokemon pokemonName={pokemonName} pokeData={pokeData} />
          </div>
        );
      }
      if (pokemonState.loading) {
        return <p className="errorHandling">Loading...</p>;
      }

      if (pokemonState.errorMsg !== "") {
        return (
          <div className="errorHandling">
            <p>{pokemonState.errorMsg}</p>
            <p>Try to write in lowercase </p>
            <Link to="/pokemon">
              <button>Try Again!</button>
            </Link>
          </div>
        );
      }
      return (
        <div className="errorHandling">
          <p>{pokemonState.errorMsg}</p>
          <Link to="/pokemon">
            <button>Try Again!</button>
          </Link>
        </div>
      );
    } catch (err) {
      console.log(err);
    }
  };
  // Not yet implemented
  // const addPokemonCaught = (e) => {
  //   setCaught({ pokemonName });

  //   dispatch({
  //     type: "CREATE_CAUGHT_POKEMON",
  //     payload: {
  //       name: { pokemonName },
  //     },
  //   });
  // };
  return (
    <>
      <div>
        <div></div>
      </div>
      <div className={"poke"}>{ShowData()}</div>
    </>
  );
};

export default Pokemon;
