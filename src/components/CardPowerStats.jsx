import React from "react";

export const CardPowerStats = ({ powerStats }) => {
  const keys = Object.keys(powerStats);
  const values = Object.values(powerStats);

  return (
    <div
      className="container"
      style={{ paddingTop: "10px", paddingBottom: "10px", color: "#48d1cc" }}
    >
      <div className="justify-content-center  g-1">
        <div className="card bg-transparent">
          <div className="card-header ">
            <h5> PowerStats</h5>
          </div>
          <div className="card-body">
            <div className="row align-items-start">
              <div className="col">
                <dl>
                  <li>
                    {keys[0]} - {values[0]}
                  </li>
                  <li>
                    {keys[1]} - {values[1]}
                  </li>
                  <li>
                    {keys[2]} - {values[2]}
                  </li>
                </dl>
              </div>
              <div className="col">
                <dl>
                  <li>
                    {keys[3]} - {values[3]}
                  </li>
                  <li>
                    {keys[4]} - {values[4]}
                  </li>
                  <li>
                    {keys[5]} - {values[5]}
                  </li>
                </dl>
              </div>
              <dl>
                <li>Average Height - {powerStats.height}</li>
                <li>Average Weight - {powerStats.weight} </li>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
