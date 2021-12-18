import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = ({pokemonName}) => {
    const pokemonWishList = useSelector((state) => state.PokemonWishList);

    const dispatch = useDispatch();
    

    
  return (
    <div>
      <ul>
          
          <li>{pokemonName}</li>
      </ul>
    </div>
  );
};

export default Wishlist;
