import React from "react";
/* import errorImage3 from "../../images/404-RBEMW37KC5BHXBTAKG6BTP5PXI.jpg"; */
import errorImage4 from "../../images/thanos-g05df283bd_1280.png";
//import errorImage5 from "../../images/thanos-g333641b48_1920.jpg";
//import errorImage6 from "../../images/toy-g12842dcca_1920.jpg";

export const ErrorPage = () => {
  return (
    <div style={{ margin: "3%", position: "relative" }}>
      <img
        src={errorImage4}
        height="370px"
        width="190px"
        alt="404-error"
        style={{ borderRadius: "500px" }}
      />
      <div className="d-grid gap-2 d-md-block">
        <button
          style={{ position: "relative", bottom: "50px" }}
          className="btn btn-outline-warning bt-sm"
        >
          ERROR 404 - THANOS DISAPPEARED THE PAGE
        </button>
      </div>
    </div>
  );
};
