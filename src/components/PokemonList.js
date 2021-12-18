import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../redux/actions/PokemonActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import GameBoy from "./GameBoy/GameBoy";

const PokemonList = (props) => {
  //useSelector that gets the entire state from the PokemonList reducer in the store
  const pokemonList = useSelector((state) => state.PokemonList);
  const dispatch = useDispatch();

  //State of the search pokemon input
  const [search, setSearch] = useState("");

  useEffect(() => {
    FetchData(1);
  }, []);
  console.log(pokemonList)

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return (
          <p></p>
      );
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <div>
      <div className={"search-wrapper"}>
        <p>Search: </p>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          Search
        </button>
      </div>
      {ShowData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 5)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
              <GameBoy pokemonList={pokemonList}/>

    </div>
  );
};

export default PokemonList;
