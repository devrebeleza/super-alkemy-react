import React from "react";

export const SelectUnselectHero = ({ checkHero, heroSelected }) => {
  let colorFill;
  !heroSelected ? (colorFill = "#6D696D") : (colorFill = "#48d1cc");
  return (
    <div onClick={checkHero}>
      <div>
        <span></span>
      </div>
      <div>
        <button className="btn bg-transparent ">
          <svg height="27" width="25" className="star rating" data-rating="1">
            <polygon
              points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
              fill={colorFill}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
