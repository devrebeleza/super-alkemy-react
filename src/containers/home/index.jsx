import React, { useState, useEffect } from "react";
import { CardHeroesComponent } from "../../components/CardHeroesComponent";
import { CardPowerStats } from "../../components/CardPowerStats";

export const TeamContainer = ({ setFavorites, listHeroes }) => {
  const getPowerStats = () => {
    let intelligence = 0;
    let strength = 0;
    let speed = 0;
    let durability = 0;
    let power = 0;
    let combat = 0;
    let height = 0;
    let weight = 0;
    let listPowerStats = [];

    for (let index = 0; index < listHeroes.length; index++) {
      let parseNumber = isNaN(
        parseInt(listHeroes[index].powerstats.intelligence, 10)
      )
        ? 0
        : parseInt(listHeroes[index].powerstats.intelligence, 10);
      intelligence = intelligence + parseNumber;
      //////////////
      parseNumber = isNaN(parseInt(listHeroes[index].powerstats.strength, 10))
        ? 0
        : parseInt(listHeroes[index].powerstats.strength, 10);
      strength = strength + parseNumber;
      //////////////
      parseNumber = isNaN(parseInt(listHeroes[index].powerstats.speed, 10))
        ? 0
        : parseInt(listHeroes[index].powerstats.speed, 10);
      speed = speed + parseNumber;
      //////////////
      parseNumber = isNaN(parseInt(listHeroes[index].powerstats.durability, 10))
        ? 0
        : parseInt(listHeroes[index].powerstats.durability, 10);
      durability = durability + parseNumber;
      //////////////
      parseNumber = isNaN(parseInt(listHeroes[index].powerstats.power, 10))
        ? 0
        : parseInt(listHeroes[index].powerstats.power, 10);
      power = power + parseNumber;
      //////////////
      parseNumber = isNaN(parseInt(listHeroes[index].powerstats.combat, 10))
        ? 0
        : parseInt(listHeroes[index].powerstats.combat, 10);
      combat = combat + parseNumber;
      //////////////
      let replacedString = listHeroes[index].appearance.height[1].replace(
        "cm",
        ""
      );

      parseNumber = isNaN(parseInt(replacedString, 10))
        ? 0
        : parseInt(replacedString, 10);
      height = height + parseNumber;
      //////////////
      replacedString = listHeroes[index].appearance.weight[1].replace("kg", "");
      parseNumber = isNaN(parseInt(replacedString, 10))
        ? 0
        : parseInt(replacedString, 10);
      weight = weight + parseNumber;
    }

    listPowerStats["intelligence"] = intelligence;
    listPowerStats["strength"] = strength;
    listPowerStats["speed"] = speed;
    listPowerStats["durability"] = durability;
    listPowerStats["power"] = power;
    listPowerStats["combat"] = combat;

    let sorted = Object.fromEntries(
      Object.entries(listPowerStats).sort((a, b) => b[1] - a[1])
    );

    height = height / listHeroes.length;
    height = height.toFixed(2);
    weight = weight / listHeroes.length;
    weight = weight.toFixed(2);
    sorted["height"] = height + " cm";
    sorted["weight"] = weight + " kg";
    return sorted;
  };
  const [powerStats, setPowerStats] = useState(() => getPowerStats());

  useEffect(() => {
    setPowerStats(getPowerStats());
  }, [listHeroes]);

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      {listHeroes.length === 0 ? (
        <div className="alert alert-secondary" role="alert">
          <h5>No Heroes Selected</h5>
        </div>
      ) : (
        <div>
          <CardPowerStats powerStats={powerStats} />
          <CardHeroesComponent
            ListHeroes={listHeroes}
            setFavorites={setFavorites}
          />
        </div>
      )}
    </div>
  );
};
