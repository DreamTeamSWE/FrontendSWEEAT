import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import ForgotViewModel from "./ForgotVM";
import { useStore } from "../../../Context";

import { observer } from "mobx-react";

import "../css/formStyle.css";

function ForgotPassword() {
  const { register, errors, handleSubmit, forgotPasswordHandler } =
    ForgotViewModel(useStore());

  return (
    <section className="section auth form">
      <div className="container">
        <h1>Hai dimenticato la tua password?</h1>
        <p>
          Inserisci il tuo indirizzo email registrato e ti spediremo il codice
          per reimpostare la password.
        </p>

        <form onSubmit={handleSubmit(forgotPasswordHandler)}>
          <div className="field">
            <label>Email</label>
            <input
              {...register("email", {
                required: "Email necessaria",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Questa non è un email",
                },
              })}
              type="email"
              placeholder="Email"
            />
          </div>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <p className="messaggioErrore">{message}</p>
            )}
          />
          <div className="button">
            <input type="submit" value="Invia codice" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default observer(ForgotPassword);
