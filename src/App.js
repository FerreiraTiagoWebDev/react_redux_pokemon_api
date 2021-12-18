import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokemon from "./components/Pokemon";
import PokemonList from "./components/PokemonList";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/wishlist"} exact component={Wishlist} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
