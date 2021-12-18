import { uniqueId } from "lodash";

const DefaultState = {
    id: 1,
    name: "",
    
    
  };
  const PokemonWishListReducer = (state = DefaultState, action) => {
      const{type, payload} = action;

    switch (type) {
      case "CREATE_CAUGHT_POKEMON":
        return [
          ...state,
          {
            id: uniqueId(),
            name: payload,
          },
        ];
     
      default:
        return state;
    }
  };
  
  export default PokemonWishListReducer;