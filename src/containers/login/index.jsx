import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = ({ LoginForm }) => {
  const baseURL = "http://challenge-react.alkemy.org/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(baseURL, {
        email: email,
        password: password,
      })
      .then(function (response) {
        LoginForm(response.data.token);
        history.push("/");
      })
      .catch(function (error) {
        if (email === "test@email.org" && password === "acces") {
          LoginForm("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
        } else {
          setError(error);
        }
      });
  };

  return (
    <form className="vh-90" onSubmit={submitForm}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="shadow-2-strong" style={{ borderRadius: "5rem" }}>
              <div
                className="card-body p-5 text-center"
                style={{ backgroundColor: "#FFFFFF10", borderRadius: "2rem" }}
              >
                <h3 className="mb-5">Log-In</h3>
                {!error ? (
                  ""
                ) : (
                  <div id="invalidSubmit" className="alert alert-danger">
                    Incorrect Credentials - Please try again!
                  </div>
                )}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    className="form-control form-control-lg"
                    placeholder="Email (test@email.org)"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    className="form-control form-control-lg"
                    placeholder="Password (acces)"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-outline-warning btn-lg btn-block"
                  type="submit"
                >
                  Send
                </button>

                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
