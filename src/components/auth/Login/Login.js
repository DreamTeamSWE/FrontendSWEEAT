import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

import LoginViewModel from "./LoginVM";
import { useStore } from "../../../Context";

import { observer } from "mobx-react";

import "../css/formStyle.css";

function Login() {
  const {
    register,
    errors,
    loginError,
    errMessage,
    handleSubmit,
    loginHandler,
  } = LoginViewModel(useStore());

  return (
    <section className="section auth form">
      <div className="container">
        <h1>Log in</h1>

        <form onSubmit={handleSubmit(loginHandler)}>
          <div className="field">
            <label>Email</label>
            <input
              {...register("email", {
                required: "Email necessaria",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Questo non è un email",
                },
              })}
              type="email"
              placeholder="Email"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="messaggioErrore">{message}</p>
              )}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              {...register("password", {
                required: "Password vuota",
              })}
              type="password"
              placeholder="Password"
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <p className="messaggioErrore">{message}</p>
              )}
            />
          </div>
          <div>
            {loginError && <p className="messaggioErrore">{errMessage}</p>}
          </div>
          <div className="field">
            <Link to="/passwordDimenticata">Non ti ricordi la password?</Link>
          </div>
          <div className="button">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default observer(Login);
