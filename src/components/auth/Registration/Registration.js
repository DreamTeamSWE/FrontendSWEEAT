import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import RegistrationViewModel from "./RegistrationVM";
import { useStore } from "../../../Context";

import { observer } from "mobx-react";

import "../css/formStyle.css";

function Registration() {
  const {
    register,
    errors,
    regError,
    errMessage,
    handleSubmit,
    registrationHandler,
    getValues,
  } = RegistrationViewModel(useStore());

  return (
    <section className="section auth form">
      <div className="container">
        <h1>Registrazione</h1>

        <form onSubmit={handleSubmit(registrationHandler)}>
          <div className="field">
            <label>Nome*</label>
            <input
              {...register("name", {
                required: "Nome richiesto",
                pattern: {
                  value: /^\p{L}+$/u,
                  message: "Concesse solo lettere",
                },
              })}
              placeholder="Nome"
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <p className="messaggioErrore">{message}</p>
              )}
            />
          </div>
          <div className="field">
            <label>Cognome*</label>
            <input
              {...register("surname", {
                required: "Cognome richiesto",
                pattern: {
                  value: /^\p{L}+$/u,
                  message: "Concesse solo lettere",
                },
              })}
              placeholder="Cognome"
            />
            <ErrorMessage
              errors={errors}
              name="surname"
              render={({ message }) => (
                <p className="messaggioErrore">{message}</p>
              )}
            />
          </div>
          <div className="field">
            <label>Indirizzo e-mail*</label>
            <input
              {...register("email", {
                required: "Email richiesta",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Questo non è il formato email",
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
            <label>Password*</label>
            <input
              {...register("password", {
                required: "Password necessaria",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/u,
                  message:
                    "La password deve essere lunga almeno 8 caratteri e contenere almeno una lettera maiuscola, una minuscola, un numero e un simbolo tra @$!%*?&.",
                },
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
          <div className="field">
            <label>Conferma Password*</label>
            <input
              {...register("cp", {
                required: "Conferma password necessaria",
                validate: (value) =>
                  value === getValues("password") ||
                  "La password di conferma deve essere identica.",
              })}
              type="password"
              placeholder="Conferma Password"
            />
            <ErrorMessage
              errors={errors}
              name="cp"
              render={({ message }) => (
                <p className="messaggioErrore">{message}</p>
              )}
            />
          </div>
          <div>
            {regError && <p className="messaggioErrore">{errMessage}</p>}
          </div>
          <div className="button">
            <input type="submit" value="Registrati" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default observer(Registration);
