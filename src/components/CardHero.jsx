import React, { useState } from "react";
import { SelectUnselectHero } from "./SelectUnselectHero";

export const CardHero = (props) => {
  const [heroSelected, setHeroSelected] = useState(props.hero.selected);

  const checkHero = () => {
    setHeroSelected(!heroSelected);
    props.setFavorites(props.hero);
  };
  const modalId = "heroModal" + props.hero.id;
  const hrefModal = "#" + modalId;

  return (
    <div key={props.hero.id} className="col">
      <div
        className="card shadow-sm h-100 "
        style={{ backgroundColor: "#1d1d1e31" }}
      >
        <a data-bs-toggle="modal" href={hrefModal} role="button">
          <img
            className="card-img-top"
            src={`${props.hero.image.url}`}
            alt={`hero ${props.hero.name}`}
            style={{ borderRadius: "55%" }}
          />
        </a>

        <div className="card-body">
          <h5 className="card-title" style={{ color: "#48d1cc" }}>
            {props.hero.name}
          </h5>
        </div>
        <div className="card-footer text-center">
          <div className=" justify-content-between ">
            <SelectUnselectHero
              checkHero={checkHero}
              heroSelected={heroSelected}
            />
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby="heroeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#1d1d1e21", color: "#24b37c" }}
            >
              <h5 className="modal-title" id="exampleModalLabel">
                Details {props.hero.name} ({props.hero.id})
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="row align-items-start">
              <div className="col">
                <div className="modal-body">
                  <h5>Appearance</h5>
                  <hr />
                  <ol className="list-group list-group-flush">
                    <li className="list-group-item">
                      <b>Weight: </b> {props.hero.appearance.weight[1]}
                    </li>

                    <li className="list-group-item">
                      <b>Height:</b> {props.hero.appearance.height[1]}
                    </li>

                    <li className="list-group-item">
                      <b>Eye Color:</b> {props.hero.appearance["eye-color"]}
                    </li>
                    <li className="list-group-item">
                      <b>Hair Color:</b> {props.hero.appearance["hair-color"]}
                    </li>

                    <li className="list-group-item">
                      <b>Base:</b> {props.hero.work.base}
                    </li>
                    <li className="list-group-item">
                      <b>Aliases:</b> {props.hero.biography.aliases}
                    </li>
                  </ol>
                </div>
              </div>
              {/* powerstats */}
              <div className="col">
                <div className="modal-body">
                  <h5>PowerStats</h5>
                  <hr />
                  <ol className="list-group list-group-flush">
                    <li className="list-group-item">
                      <b>Intelligence: </b> {props.hero.powerstats.intelligence}
                    </li>

                    <li className="list-group-item">
                      <b>Strength:</b> {props.hero.powerstats.strength}
                    </li>

                    <li className="list-group-item">
                      <b>Speed:</b> {props.hero.powerstats.speed}
                    </li>
                    <li className="list-group-item">
                      <b>Durability:</b> {props.hero.powerstats.durability}
                    </li>

                    <li className="list-group-item">
                      <b>Power:</b> {props.hero.powerstats.power}
                    </li>
                    <li className="list-group-item">
                      <b>Combat:</b> {props.hero.powerstats.combat}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
