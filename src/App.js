import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./containers/login";
import { TeamContainer } from "./containers/home";
import { HeroesContainer } from "./containers/heroes";
import { NavBar } from "./components/generals/NavBar";
import {
  canSetElementLocalStorage,
  getLocalStorage,
  setUnsetElementLocalStorage,
} from "./contexts/LocalStorageFunctions";
import { ErrorPage } from "./containers/error/ErrorPage";
import { Footer } from "./components/generals/Footer";

function App() {
  const [token, setToken] = useState(!!localStorage.getItem("accesToken"));
  const accesTokenApi = "10225351462708768";
  const baseAPI = `https://superheroapi.com/api.php/${accesTokenApi}/`;
  const [error, setError] = useState("");

  const [listHeroes, setListHeroes] = useState(
    getLocalStorage("SelectedHeroes")
  );

  const LoginForm = (accesToken) => {
    localStorage.setItem("accesToken", accesToken);
    setToken(true);
  };

  const LogoutForm = () => {
    setToken(false);
    localStorage.removeItem("accesToken");
  };

  /*             -------------               */
  const setFavorites = (hero) => {
    setError("");
    if (!hero.selected) {
      let errorSetHero = canSetElementLocalStorage("SelectedHeroes", hero);
      console.log(errorSetHero);
      if (errorSetHero !== true) {
        setError(errorSetHero);
        return;
      }
    }
    hero.selected = !hero.selected;
    setUnsetElementLocalStorage("SelectedHeroes", hero);
    setListHeroes(getLocalStorage("SelectedHeroes"));
  };

  return (
    <div>
      <BrowserRouter>
        {!token ? "" : <NavBar LogoutForm={LogoutForm} />}
        <div className="App">
          {!error ? (
            ""
          ) : (
            <div className="alert alert-danger" role="alert">
              <h5>{error}</h5>
            </div>
          )}
          <Switch>
            <Route exact path="/">
              {!token ? (
                <Redirect to="/login" />
              ) : (
                <TeamContainer
                  setFavorites={setFavorites}
                  listHeroes={listHeroes}
                  setListHeroes={setListHeroes}
                />
              )}
            </Route>
            <Route exact path="/login">
              {token ? <Redirect to="/" /> : <Login LoginForm={LoginForm} />}
            </Route>
            <Route exact path="/heroes">
              {!token ? (
                <Redirect to="/login" />
              ) : (
                <HeroesContainer
                  baseAPI={baseAPI}
                  setFavorites={setFavorites}
                  listHeroes={listHeroes}
                  setError={setError}
                />
              )}
            </Route>
            <Route component={ErrorPage} />
          </Switch>
        </div>
        {!token ? "" : <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
