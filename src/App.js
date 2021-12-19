import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Pokemon from "./pages/Pokemon";
import PokemonList from "./pages/PokemonList";
// import Wishlist from "./components/Wishlist";
import PokemonVideo from "./pages/PokemonVideo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={PokemonVideo} />
        <Route path={"/pokemon"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/pokemon"} />
      </Switch>
    </div>
  );
}

export default App;
