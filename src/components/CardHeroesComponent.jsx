import React from "react";
import { CardHero } from "./CardHero";

export const CardHeroesComponent = ({ ListHeroes, setFavorites }) => {
  return (
    <div className="container" style={{ paddingTop: "10px" }}>
      <div className="row justify-content-center row-cols-2 row-cols-sm-4 row-cols-md-6 g-2">
        {ListHeroes.map((element) => {
          return (
            <CardHero
              key={element.id}
              hero={element}
              setFavorites={setFavorites}
            />
          );
        })}
      </div>
    </div>
  );
};
