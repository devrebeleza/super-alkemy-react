import React from "react";

export const Footer = () => {
  return (
    <footer className=" footer py-3 text-center text-lg-start text-white">
      <div className=" p-1 pb-0">
        <section className="pt-0">
          <div className="row d-flex align-items-end">
            <div className="col  text-right text-md-end">
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

            <div className="col  text-center  text-md-start">
              <div className="p-1">
                <a
                  href="https://github.com/devrebeleza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" btn-floating m-1 "
                >
                  <i className="i-icon fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/renzogarcia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  btn-floating m-1"
                >
                  <i className="i-icon fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
