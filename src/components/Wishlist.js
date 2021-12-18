import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = ({pokemonName}) => {
    const pokemonWishList = useSelector((state) => state.PokemonWishList);
    console.log(pokemonWishList)
    const dispatch = useDispatch();
    

    // useEffect(() => {
    //     dispatch(GetPokemonWish(name));
    //     console.log(name)
    //   }, []);

    
  return (
    <div>
      <ul>
          
          <li>{pokemonName}</li>
      </ul>
    </div>
  );
};

export default Wishlist;
