import axios from "axios";


//first call with all pokemons
export const GetPokemonList = (page) => async dispatch => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING"
    });

    const perPage = 5;
    const offset = (page * perPage) - perPage;

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    })
  }
};
//second call for pokemon stats with response of first call
export const GetPokemon = (pokemon) => async dispatch => {
  try {
    dispatch({
      type: "POKEMON_MULTIPLE_LOADING"
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: "POKEMON_MULTIPLE_SUCCESS",
      payload: res.data,
      pokemonName: pokemon
    })
  } catch (e) {
    dispatch({
      type: "POKEMON_MULTIPLE_FAIL",
    })
  }
};

