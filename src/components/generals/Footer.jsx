import React from "react";

export const Footer = () => {
  return (
    <div className="  py-1  bottom my-3 ">
      <footer className=" footer mt-auto py-3 text-center text-lg-start text-white">
        <div className=" p-1 pb-0">
          <section className="pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-7 text-center text-md-end">
                <div className="p-1">
                  © 2020 Copyright:{" "}
                  <a
                    className="text-white"
                    href="https://github.com/devrebeleza"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    devReBeleza
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-8 text-center  text-md-end">
              <div className="p-1">
                <a
                  href="https://www.linkedin.com/in/renzogarcia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-floating m-1"
                  className="text-white"
                  role="button"
                >
                  <i className="i-icon fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/renzogarcia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-floating m-1"
                  className="text-white"
                  role="button"
                >
                  <i className="i-icon fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};
