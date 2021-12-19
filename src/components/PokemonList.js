import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../redux/actions/PokemonActions";
import GameBoyList from "./GameBoy/GameBoyList";
import "./GameBoy/gameBoy.scss";
import { CgPokemon } from "react-icons/cg";
// import { Link } from "react-router-dom";
// import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  //useSelector that gets the entire state from the PokemonList reducer in the store
  const pokemonList = useSelector((state) => state.PokemonList);

  const dispatch = useDispatch();

  //State of the search pokemon input
  const [search, setSearch] = useState("");

  useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return <p></p>;
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <div>
      <GameBoyList pokemonList={pokemonList} />
      {/* search doesn0t work with uppercase */}
      <div className={"search_wrapper"}>
        <p>Search For Your Favorite Pokemon: </p>
        <div className="form_row">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          
          <button
            className="button_form_submit"
            onClick={() => props.history.push(`/pokemon/${search}`)}
          >
            <CgPokemon className="icon_form_submit"/> Search
          </button>
        </div>
      </div>
      {ShowData()}

      {/* Paginated access */}
      {/* {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 4)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )} */}
      
      <div className="controls_desc"></div>
    </div>
  );
};

export default PokemonList;
