import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
// import Memes from "./components/Memes/Memes";
// import SearchBar from "./components/layout/SearchBar";
import { Switch, Route ,HashRouter} from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Meme from "./components/Memes/Meme";
import MemeState from "./context/meme/memeState";
import NewMeme from "./components/Memes/NewMeme"
import "./App.css";
import SearchBar from "./components/layout/SearchBar";

function App() {
  useEffect(() => {
    //Init materialize js
    M.AutoInit();
  });

  return (
    <MemeState>
      <HashRouter>
      <SearchBar/>
        <div className="teal lighten-2">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/meme/:id" component={Meme} />{" "}
            <Route exact path="/meme/new" component={NewMeme} />{" "}
            <Route component={Home}/>
          </Switch>
        </div>
      </HashRouter>
    </MemeState>
  );
}

export default App;
