//we combine reducers being that key-value is a name(that we will call in useSelector)-and the name of the Reducer

import {combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import PokemonWishListReducer from "./PokemonWishReducer";

const RootReducer = combineReducers({
    PokemonList: PokemonListReducer,
    Pokemon: PokemonMultipleReducer,
    PokemonWishList: PokemonWishListReducer,
  });

export default RootReducer;