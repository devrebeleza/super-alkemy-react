import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardHeroesComponent } from "../../components/CardHeroesComponent";
import { Spinner } from "../../components/generals/Spinner";

export const HeroesContainer = ({
  baseAPI,
  setFavorites,
  listHeroes,
  setError,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(false);
  let listDataHeroes = [];

  const handleSearchByName = (e) => {
    let filter = e.target.value;
    if (filter.length > 2 || filter.length === 0) {
      setSearchTerm(filter);
    }
  };

  /*             -------------               */
  if (data) {
    let listStorageFavorite = [];
    listStorageFavorite = [...listHeroes];
    data.forEach((element) => {
      const findElement = listStorageFavorite.find(
        (item) => item.id === element.id
      );
      const newHero = Object.assign(
        { selected: !findElement ? false : true },
        element
      );
      listDataHeroes.push(newHero);
    });
  }

  const searchData = async (urlSearchAPI) => {
    setError("");
    await axios
      .get(urlSearchAPI)
      .then(function (response) {
        setData([...response.data.results]);
        setSpinner(false);
      })
      .catch(function (error) {
        setSpinner(false);
        setData([]);
        listDataHeroes = [];
      });
  };

  useEffect(() => {
    let urlSearchAPI = `${baseAPI}/search/${searchTerm}`;
    setSpinner(true);
    searchData(urlSearchAPI);
  }, [searchTerm]);

  return (
    <div>
      <h1>Page Heroes</h1>
      <div className="container">
        <div className="div-search ">
          <div class="box">
            <form name="search">
              <input
                type="text"
                class="input"
                name="txt"
                onInput={handleSearchByName}
                onmouseout="document.search.txt.value = ''"
              />
            </form>
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>

      {spinner ? <Spinner /> : ""}

      <CardHeroesComponent
        ListHeroes={listDataHeroes}
        setFavorites={setFavorites}
      />
    </div>
  );
};
